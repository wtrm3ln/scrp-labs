import { useState, useEffect } from 'react';
import WavyLine from './waveLine';
import Image from 'next/image';

const LottiePlayer = ({ src, style }) => {
    useEffect(() => {
      // Dynamically load the lottie-player Web Component script
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@lottiefiles/lottie-player';
      script.defer = true;
      document.body.appendChild(script);
  
      // Cleanup the script when the component unmounts
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }, []);
  
    return (
      <lottie-player
        autoplay
        loop
        mode="normal"
        src={src}
        style={style}
      ></lottie-player>
    );
  };

const ServicesDisplay = ({ imageSrc, text, subtext }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
  
    useEffect(() => {
      const checkTouchDevice = () => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
      };
      checkTouchDevice();
    }, []);
  
    return (
      <div
        className="cursor-default text-center flex flex-col justify-center items-center my-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center mb-2">
          {imageSrc.endsWith('.json') ? (
            <LottiePlayer
            src={imageSrc}
            style={{ width: '300px', height: '200px' }}
          />
          ) : (
            <Image src={imageSrc} alt={text} width={150} height={150} /> // Adjust dimensions as needed
          )}
        </div>
  
        <div className="relative inline-block w-full mb-3">
          <strong className="md:w-48 font-delicious text-3xl">{text}</strong>
          <div
            className={`absolute left-0 w-full ${
              isHovered ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            <WavyLine isVisible={isHovered} />
          </div>
        </div>
  
        <p className="md:w-64">{subtext}</p>
      </div>
    );
  };

export default ServicesDisplay