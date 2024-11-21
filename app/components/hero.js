"use client"
import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import LottiePlayer from './lottiePlayer';

const Hero = () => {
    return (
      <div className="h-2/3 md:min-h-screen relative flex justify-center items-center p-4 overflow-hidden">

        <Spline className='hidden lg:block absolute inset-0 z-[9]'
          scene="https://prod.spline.design/Y0ZooapxnReh45D3/scene.splinecode"
        />

        <div className='lg:hidden absolute inset-0 z-[9] flex justify-center items-center'>
        <Image height={300} width={300}
          src="/hero.png"
        />
        </div>

        <div className='absolute inset-0 z-[7] max-w-screen flex justify-center items-center'>
        <Image 
        width={0} // Placeholder width (next/image requires a value)
        height={0} // Placeholder height
        style={{ width: "100%", height: "auto" }}
          src="/herobg.svg"
        />
        </div>

        
        <div className='absolute md:inset-0 z-[8] flex justify-center items-end space-x-[200px] md:space-x-[800px]'
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