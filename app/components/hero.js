import Image from 'next/image'
const Hero = () => {
    return (
      <div className="min-h-screen w-full p-4 flex justify-center items-center">
          <div className="space-x-4 relative">
            <Image src='logo.svg' width='300' height='10'/>
            
            <p className='text-white text-5xl font-delicious absolute -bottom-24 -right-48 -rotate-3 whitespace-nowrap'>
            Sourced from the Scrap!
            </p>
          </div>
      </div>
    );
  };
  
  export default Hero;