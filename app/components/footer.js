import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
      <footer className='mt-20'>

        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className='md:col-span-2 flex items-center justify-center'>
            <h3 className="text-5xl md:text-[150px] whitespace-nowrap text-white font-delicious">Scrp Labs</h3>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>123 Street Name, City, Country</span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-10">
              <a href="#" className="hover:text-black/70"><Facebook size={30} /></a>
              <a href="#" className="hover:text-black/70"><Twitter size={30} /></a>
              <a href="#" className="hover:text-black/70"><Instagram size={30} /></a>
              <a href="#" className="hover:text-black/70"><Linkedin size={30} /></a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates:</p>
            <form class="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your email" 
              class="bg-dark/50 text-white p-2 rounded-md" 
              required
            />
            <button 
              type="submit" 
              class="bg-dark hover:bg-dark/90 text-white p-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-dark text-white'>
        Crafted & Coded by Shaurya
        </div>

      </footer>
    );
  };
  
  export default Footer;