import ProductCard from "../components/Cards/ProductCard";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "../contentful/contentful";

export default async function Store () {
    const products = await getProducts();

    return(
    <div>
        <div className="mt-36 flex justify-between items-center p-2 md:p-12">

          <Link href="/store" className="hidden md:flex flex-col items-center">
            <Image src="/utilities/back.svg" width={50} height={200}/>
          <p className="text-xl rotate-2 text-white font-medium">Back</p>
          </Link>

          <p className="text-5xl rotate-2 text-center w-full text-white font-delicious">Here is everything we have</p>

          <div>
          </div>

        </div>

    <div className="md:grid grid-cols-2 gap-x-12 gap-y-6 md:space-y-0 space-y-6 p-4 md:p-12">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard 
            productName={product.fields.name} 
            emoji={product.fields.emoji} 
            price={product.fields.price}
            imageSrc={`https:${product.fields.featuredProductImage.fields.file.url}`}
            slug={product.fields.slug}
          />
        </div>
      ))}
      
      <div className="col-span-2 flex flex-col items-center justify-center my-12">
      <Image src="/utilities/scrollend.svg" width={600} height={200}/>
      </div>
    </div>

    </div>
)}