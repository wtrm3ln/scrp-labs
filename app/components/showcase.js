import ShowcaseCard from './Cards/ShowcaseCard';
import Link from 'next/link'

const Showcase = ({products}) => {
  return (
    <div>
      {/* Horizontal Scrollable Section */}
      <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory pl-12 py-12 space-x-12 scroll-px-4 hide-scrollbar">
        {products.map((product, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-[60vw] h-[60vh] md:h-[80vh] snap-center">
            <ShowcaseCard
              tag={product.fields.tagline || "Shop now"}
              title={product.fields.name}
              color={product.fields.color || "text-blue-300"}
              imageSrc={`https:${product.fields.featuredProductImage.fields.file.url}`}
              slug={product.fields.slug}
            />
          </div>
        ))}
      </div>

      {/* Explore Store Button */}
      <div className="flex justify-center my-12">
        <Link href="/store" className="bg-white text-primary text-xl font-medium px-5 py-2 rounded-full shadow-lg">
          Explore the <span className="font-extrabold">SCRP</span> store
        </Link>
      </div>
    </div>
  );
};

export default Showcase;