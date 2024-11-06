import ProductCard from "../components/Cards/ProductCard";
import Link from "next/link";
import Image from "next/image";

export default function Store () {

    const products = [
        {
          name: "Sneakers Flaming!",
          price: "200",
          imageSrc: "/product1.png",
        },
        {
          name: "Phone Charms",
          price: "250",
          imageSrc: "/product2.png",
        },
        {
          name: "Heart Charms",
          price: "300",
          imageSrc: "/product2.png",
        },
        {
          name: "Icon",
          price: "450",
          imageSrc: "/product1.png",
        },
      ];

    return(
    <div>
        <div className="mt-36 flex justify-between items-center p-12">

          <Link href="/store" className="flex flex-col items-center">
            <Image src="/utilities/back.svg" width={50} height={200}/>
          <p className="text-xl rotate-2 text-white font-medium">Back</p>
          </Link>

          <p className="text-3xl rotate-2 text-white font-delicious">Here is everything we have</p>

          <div className="flex flex-col items-center">
          <Image src="/utilities/filter.svg" width={30} height={200}/>
          <p className="text-xl rotate-2 text-white font-medium">Filters</p>
          </div>

        </div>

    <div className="md:grid grid-cols-2 gap-12 p-12">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard 
            productName={product.name} 
            price={product.price}
            imageSrc={product.imageSrc} 
          />
        </div>
      ))}
      
      <div className="col-span-2 flex flex-col items-center justify-center my-12">
      <div className="mt-20 flex text-center max-w-3xl justify-center -mb-10">
            <p className="text-xl text-white font-delicious">Whoops! You&apos;ve reached  the end!</p>
      </div>
      <Image src="/utilities/scrollend.png" width={300} height={200}/>
      </div>
    </div>

    </div>
)}