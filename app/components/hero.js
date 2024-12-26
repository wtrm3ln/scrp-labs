"use client"
import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import LottiePlayer from './lottiePlayer';

const Hero = () => {
    return (
      <div className="min-h-2/3 w-full md:min-h-screen relative flex justify-center items-center p-4 overflow-x-hidden">

        <Spline className='hidden lg:block absolute h-screen inset-0 z-[9]'
          scene="https://prod.spline.design/LtN7jITTwsRVKaT4/scene.splinecode"
        />

        <div className='lg:hidden absolute inset-0 z-[9] flex justify-center items-center'>
        <Image height={300} width={300}
          src="/hero.png"
        />
        </div>

        
        <Image 
          src="/herobg.svg"
          fill // Ensures the image fills the container
          className="absolute inset-0 z-[7] object-contain w-auto md:h-auto md:w-full"
          alt="Hero Background"
        />
      

        
        <div className='md:absolute md:inset-0 z-[8] flex justify-center items-end space-x-[200px] md:space-x-[800px]'
        >
          <div></div>
          <LottiePlayer 
            src="/hero.json" 
            style={{ width: "700px", height: "500px" }} 
            autoplay={true} 
            loop={false} 
          />
        </div>
      </div>
    );
  };
  
  export default Hero;