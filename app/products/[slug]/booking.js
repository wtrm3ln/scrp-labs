'use client';

import { useRef, useEffect, useState } from "react";
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

const Tick = () => {
    const pathRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the SVG is visible
      );
  
      if (pathRef.current) {
        observer.observe(pathRef.current);
      }
  
      return () => {
        if (pathRef.current) {
          observer.unobserve(pathRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      const path = pathRef.current;
      if (path) {
        const length = path.getTotalLength();
  
        // Set initial dash properties
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = isVisible ? "0" : length;
  
        // Add transition for the animation
        path.style.transition = isVisible ? "stroke-dashoffset 0.7s ease-out" : "none";
      }
    }, [isVisible]);
  
    return (
      <svg
        width="30"
        height="47"
        viewBox="0 0 76 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <path
          ref={pathRef}
          d="M2.96631 27.4397C5.16911 30.6591 6.57572 34.2944 8.48508 37.6888C8.94829 38.5123 11.5654 44.3641 12.7854 44.7127C13.4039 44.8894 14.0209 44.319 14.5772 43.996C20.5871 40.5064 26.2913 36.3489 32.0294 32.4567C46.0806 22.9259 59.7334 13.1374 73.2769 2.92773"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  };
  
  const OrderDisplay = ({ imageSrc, text, subtext }) => {
    return (
      <div
        className="text-center flex font-delicious  flex-col justify-center items-center my-12">
        <div className="flex items-center justify-center mb-2">
        {imageSrc.endsWith('.json') ? (
            <LottiePlayer
            src={imageSrc}
            style={{ width: '300px', height: '200px' }}
          />
          ) : (
            <Image src={imageSrc} alt={text} width={150} height={50} /> // Adjust dimensions as needed
          )}
        </div>
  
        <div className="relative inline-block w-full mb-3">
          <span className="md:w-48 text-4xl">{text}</span>
        </div>
        
        <p className="md:w-64 text-2xl">{subtext}</p>
      </div>
    );
  };

const Booking = () => {

  const order = [
    { text: "Click on Shop Now" , subtext: "You will be re-directed to your Whatsapp", imageSrc: '/order/1.json'},
    { text: "Finalise your Order", subtext: "Chat with us to customize and confirm your order", imageSrc: '/order/2.json' },
    { text: "Recieve your Order", subtext: "We ship as soon as possible! Happy Shopping!", imageSrc: '/order/3.json' }
];

  return (
    <div className="space-y-8">
      <ol>
        <li className="flex items-center gap-3">
          <Tick />
          Multiple Colour Options
        </li>
        <li className="flex items-center gap-3">
          <Tick />
          Customisable
        </li>
        <li className="md:flex items-center gap-3">
          <Tick />
          This item is non-refundable.
          <br />
          However, we do replace defects only with start-to-end unboxing videos
          given under 24 hours after the delivery
        </li>
      </ol>

        <p>Our shopping process is slightly different!</p> 

        <div className="grid md:grid-cols-3 justify-center justify-items-center mb-8">
            {order.map((order, index) => (
                <div key={index} className='flex flex-col md:flex-row items-center gap-6'>
                <OrderDisplay
                    imageSrc={order.imageSrc}
                    text={order.text}
                    subtext={order.subtext}
                />
                {(index === 0 || index === 1) && (
                    <Image
                    src="/arrow.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                    className="rotate-90 md:rotate-0 w-20 h-6 self-center"
                    />
                )}
                </div>
            ))}
            </div>

        <div className='md:flex items-center gap-3 '>
        <p>Pan India Delivery from the City of Dreams -</p>
        <Image src='/mumbai2.png' width='150' height='10'/>
        </div>
    </div>
  );
};

export default Booking;
