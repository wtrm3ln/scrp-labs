import Image from 'next/image'
const Navbar = () => {
    return (
      <nav className="text-white fixed bg-primary z-10 top-0 left-0 right-0 p-4">
          <div className="container max-w-4xl mx-auto flex justify-between items-center space-x-4">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>

            <a href="/about" className="hover:text-gray-400">
              About
            </a>

            
            <a href="/">
            <Image src='logo.svg' width='80' height='10' />
            </a>
            

            <a href="/services" className="hover:text-gray-400">
              Services
            </a>

            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>

          </div>
      </nav>
    );
  };
  
  export default Navbar;