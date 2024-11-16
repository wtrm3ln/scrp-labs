import { getCategoryEntries, getAllCategories } from '../../contentful/contentful';
import ProductCard from '@/app/components/Cards/ProductCard';
import Image from 'next/image';
import Link from 'next/link'

export async function generateStaticParams() {
    console.log('Generating static params...');
    const categories = await getAllCategories();
  
    if (!categories.length) {
      console.error('No categories found.');
      return [];
    }
  
    return categories.map(category => ({
      slug: category.slug, // Access slug directly from category
    }));
}

export default async function Page({ params }) {
    console.log('Rendering Page component...');
    const { slug } = params;

    // Fetch category data to get the category ID by slug
    const categories = await getAllCategories();
    console.log('Fetched categories:', categories);
    const category = categories.find(cat => cat.slug === slug);

    if (!category) {
        console.error(`Category with slug "${slug}" not found.`);
        return <p>Category not found</p>;
    }

    // Fetch products associated with this category by category ID
    const products = await getCategoryEntries(category.id);
    console.log('Fetched products:', products);

  if (!products) {
    console.error(`Product with slug "${slug}" not found.`);
    return <p>Products not found</p>;
  }

  return (
    <div className='text-xl pt-24'>   
      <div className="md:grid grid-cols-2 gap-4 md:gap-12 p-2 md:p-12">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard 
            productName={product.fields.name} 
            price={product.fields.price}
            imageSrc={`https:${product.fields.featuredProductImage.fields.file.url}`}
            slug={product.fields.slug}
          />
        </div>
      ))}
      
      <div className="col-span-2 flex flex-col items-center justify-center my-12">
      <div className="mt-20 flex text-center max-w-3xl justify-center -mb-10">
            <p className="text-xl text-white font-delicious">Whoops! You&apos;ve reached  the end!</p>
      </div>
      <Image src="/utilities/scrollend.png" width={250} height={200}/>
      </div>
    </div>
    </div>
  );
}