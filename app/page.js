import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import About from "./components/about";
import { getFeaturedProducts } from "./contentful/contentful";

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div>
      <Hero />
      <Showcase products={products}/>
      <About />
    </div>
  );
}
