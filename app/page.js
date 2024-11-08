import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import About from "./components/about";
import { getProducts } from "./contentful/contentful";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Hero />
      <Showcase products={products}/>
      <About />
    </div>
  );
}
