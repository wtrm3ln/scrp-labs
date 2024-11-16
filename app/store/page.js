import HoverCard from "../components/Cards/HoverCard";
import Link from "next/link";
import { getAllCategories } from "../contentful/contentful";

export default async function Store () {
  console.timeLog("fetching categories")
  const categories = await getAllCategories();

    return(
    <div>
        <div className="mt-36 flex justify-center">
            <p className="text-xl rotate-2 text-white font-delicious">&quot;Mom can I have your credit card&quot;</p>
        </div>

    <div className="md:grid grid-cols-2 gap-12 p-2 md:p-12">
      {categories.map((category, index) => (
        <div key={index} className="h-[40vh] md:h-[50vh]">
          <HoverCard
            tag={category.tag}
            title={category.name}
            color={category.color}
            imageSrc={category.featuredProductImage}
            slug={category.slug}
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