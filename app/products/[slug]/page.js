import { getProducts, getProductBySlug } from '../../contentful/contentful';
import Image from 'next/image';
import Booking from './booking';
import Link from 'next/link';

export async function generateStaticParams() {
  const products = await getProducts();

  if (!products.length) {
    console.error('No products found.');
    return [];
  }

  return products.map(product => ({
    slug: product.fields.slug
  }));
}

export default async function Page({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    console.error(`Product with slug "${slug}" not found.`);
    return <p>Product not found</p>;
  }

  const {
    name,
    description,
    tagline,
    price,
    featuredProductImage,
    productImages,
    relatedProducts,
    category,
    emoji
  } = product.fields;


  return (
    <div className='text-xl bg-dark pt-12'>
      <div className="hidden md:flex justify-between items-center p-2 md:p-12">

        <Link href="/store" className="flex flex-col items-center">
          <Image src="/utilities/back.svg" width={50} height={200}/>
        <p className="text-xl rotate-2 text-white font-medium">Back</p>
        </Link>

        <h1 className='text-white text-5xl font-delicious mb-2'>{emoji}{name}</h1>

        <div>
        </div>

      </div>
  
  {/* Featured Image */}
  <div className='mx-2 md:mx-12'>
    <div className='xl:grid grid-cols-3'>
      <div className='col-span-2'>
        <Image
        src={`https:${featuredProductImage.fields.file.url}`}
        alt={name}
        width={featuredProductImage.fields.file.details.image.width}
        height={featuredProductImage.fields.file.details.image.height}
        className="rounded-lg md:rounded-3xl object-cover md:h-[70vh] "
      />

      <div className='grid bg-white/10 rounded-xl p-2 grid-cols-4 gap-1 my-1 md:my-3 md:gap-3'>
        {productImages?.map((image, index) => (
              <Image
                key={index}
                src={`https:${image.fields.file.url}`}
                alt={`${name} image ${index + 1}`}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className="rounded-lg w-full h-20 md:h-36 object-cover"
              />
            ))}
      </div>

      </div>

      <div className='flex flex-col md:px-6 text-white'>
        <div className='col-span-2 mb-6'>
        <h1 className='md:hidden text-white text-5xl font-delicious mb-2'>{emoji}{name}</h1>
          {/* Name and Tagline */}
          <h2 className='text-md text-gray-600 mb-4'>{tagline}</h2>

          {/* Description and Price */}
          <p className='mb-4 text-[17px]'>{description}</p>
          <div className='flex items-end gap-3 justify-between'>
          <p className="text-4xl mt-1 font-mono whitespace-nowrap">Rs. {price}.00</p>
          <a className='bg-white text-primary font-bold p-2 rounded-full'>Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="relative p-2 md:px-12 md:my-24 text-white space-y-20">
    
    <Booking />

  </div>

  <div className="relative px-12 mb-24 bg-primary rounded-t-3xl text-white">

    <div className="col-span-2 flex flex-col items-center justify-center my-12">

      <div className="my-20 flex text-center max-w-3xl justify-center">
            <p className="text-4xl text-white font-delicious">Your mind is unique & so are your ideas! Looking for something different exclusively made for you? <br></br><br></br>Ah- We love it!  Lets get started</p>
        </div>
        <a className="bg-white text-primary text-xl font-semibold px-5 py-2 rounded-full shadow-lg">
          Contact us
        </a>
    </div>

  </div>

</div>

  );
}