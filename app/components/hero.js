import Image from 'next/image'
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
      <div className="min-h-2/3 md:min-h-screen relative flex justify-center items-center p-4">

        <Spline className='hidden lg:block absolute inset-0 z-[9]'
          scene="https://prod.spline.design/Y0ZooapxnReh45D3/scene.splinecode"
        />

        <div className='lg:hidden absolute inset-0 z-[9] flex justify-center items-center'>
        <Image height={300} width={300}
          src="/hero.png"
        />

        </div>


        <div className='flex relative justify-center overflow-hidden items-center'>
          <div className="relative">  
            <p className='text-white text-center mt-[350px] text-5xl font-delicious'>
            Sourced from the Scrap!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;