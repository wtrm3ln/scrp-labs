import HoverCard from "../components/Cards/HoverCard";
import Link from "next/link";

export default function Store () {

    const products = [
        {
          tag: "Shop now",
          title: "Get your Sneakers Flaming!",
          color: "text-blue-300",
          imageSrc: "/product1.png",
        },
        {
          tag: "Shop now",
          title: "Get your Sneakers Flaming!",
          color: "text-green-500",
          imageSrc: "/product2.png",
        },
        {
          tag: "Shop now",
          title: "Get your Sneakers Flaming!",
          color: "text-blue-300",
          imageSrc: "/product3.png",
        },
        {
          tag: "Shop now",
          title: "Get your Sneakers Flaming!",
          color: "text-blue-300",
          imageSrc: "/product4.png",
        },
      ];

    return(
    <div>
        <div className="mt-36 flex justify-center">
            <p className="text-xl rotate-2 text-white font-delicious">&quot;Mom can I have your credit card&quot;</p>
        </div>

    <div className="md:grid grid-cols-2 gap-12 p-12">
      {products.map((product, index) => (
        <div key={index} className="h-[60vh] md:h-[50vh]">
          <HoverCard
            tag={product.tag}
            title={product.title}
            color={product.color}
            imageSrc={product.imageSrc}
          />
        </div>
      ))}
      
      <div className="col-span-2 flex flex-col items-center justify-center my-12">
      <Link href="/products" className="bg-white text-primary text-xl font-semibold px-5 py-2 rounded-full shadow-lg">
          View All Products
        </Link>
      <div className="my-20 flex text-center max-w-3xl justify-center">
            <p className="text-xl text-white font-delicious">Your mind is unique & so are your ideas! Looking for something different exclusively made for you? <br></br><br></br>Ah- We love it!  Lets get started</p>
        </div>
        <a className="bg-white text-primary text-xl font-semibold px-5 py-2 rounded-full shadow-lg">
          Contact us
        </a>
      </div>
    </div>

    </div>
)}