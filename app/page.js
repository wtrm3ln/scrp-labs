import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import About from "./components/about";

export default function Home() {
  return (
    <div>
      <Hero />
      <Showcase />
      <About />
    </div>
  );
}
