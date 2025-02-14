'use client';
import { useState, useEffect, useRef } from 'react';
import ShowcaseCard from './Cards/ShowcaseCard';
import Link from 'next/link';
import Image from 'next/image';

const Showcase = ({ products }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0); // Tracks the progress between two cards
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    const cardWidth = container.scrollWidth / products.length;
    const scrollPosition = container.scrollLeft;

    const currentIndex = Math.floor(scrollPosition / cardWidth);
    const progress = (scrollPosition % cardWidth) / cardWidth; // Calculate progress between two cards

    setCurrentCardIndex(currentIndex);
    setScrollProgress(progress);
  };

  const scrollHorizontally = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = window.innerWidth * 0.7; // Scroll by the visible width
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const getIconStyle = (progress, isVisible) => {
    const scale = isVisible ? 1 : 0.8; // Full size when visible, slightly smaller otherwise
    const opacity = isVisible ? 1 : 0; // Fully visible or fully hidden
    return {
      transform: `scale(${scale})`,
      opacity: `${opacity}`,
      transition: 'transform 0.3s ease, opacity 0.3s ease',
    };
  };

  return (
    <div className="relative">
      {/* Horizontal Scrollable Section */}

      <div className='relative'>

      <div className='absolute inset-0'>
          <div className='absolute inset-0 flex justify-between'>
            {/* Left Arrow */}
            <button
              onClick={() => scrollHorizontally(-1)}
              className="p-2 z-[10] bg-gradient-to-r from-dark/50 to-dark/20"
            >
              <Image src="/toggle.svg" width="30" height="30" className='rotate-180'/>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scrollHorizontally(1)}
              className=" p-2 z-[10] bg-gradient-to-l from-dark/50 to-dark/20"
            >
              <Image src="/toggle.svg" width="30" height="30"/>
            </button>
            
          </div>
        </div>

        {/* Scattered Icons */}
      {products[currentCardIndex]?.fields.icon?.fields.file?.url && (
        <div
          className="absolute top-4 left-1/3 z-10"
          style={getIconStyle(scrollProgress < 0.5, scrollProgress < 0.5)}
        >
          <img
            src={`https:${products[currentCardIndex].fields.icon.fields.file.url}`}
            className="w-32 h-32"
            alt="Product Icon 1"
          />
        </div>
      )}

      {products[currentCardIndex + 1]?.fields.icon?.fields.file?.url && (
        <div
          className="absolute top-4 left-1/3 z-10"
          style={getIconStyle(scrollProgress >= 0.5, scrollProgress >= 0.5)}
        >
          <img
            src={`https:${products[currentCardIndex + 1].fields.icon.fields.file.url}`}
            className="w-32 h-32"
            alt="Product Icon 2"
          />
        </div>
      )}

    {products[currentCardIndex]?.fields.icon?.fields.file?.url && (
            <div
              className="absolute -bottom-8 left-10 md:left-36 transform z-10"
              style={getIconStyle(scrollProgress < 0.5, scrollProgress < 0.5)}
            >
              <img
                src={`https:${products[currentCardIndex].fields.icon.fields.file.url}`}
                className="w-32 h-32"
                alt="Product Icon 1"
              />
            </div>
          )}

          {products[currentCardIndex + 1]?.fields.icon?.fields.file?.url && (
            <div
              className="absolute -bottom-8 left-10 md:left-36 transform z-10"
              style={getIconStyle(scrollProgress >= 0.5, scrollProgress >= 0.5)}
            >
              <img
                src={`https:${products[currentCardIndex + 1].fields.icon.fields.file.url}`}
                className="w-32 h-32"
                alt="Product Icon 2"
              />
            </div>
          )}

    {products[currentCardIndex]?.fields.icon?.fields.file?.url && (
            <div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10"
              style={getIconStyle(scrollProgress < 0.5, scrollProgress < 0.5)}
            >
              <img
                src={`https:${products[currentCardIndex].fields.icon.fields.file.url}`}
                className="w-32 h-32"
                alt="Product Icon 1"
              />
            </div>
          )}

          {products[currentCardIndex + 1]?.fields.icon?.fields.file?.url && (
            <div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10"
              style={getIconStyle(scrollProgress >= 0.5, scrollProgress >= 0.5)}
            >
              <img
                src={`https:${products[currentCardIndex + 1].fields.icon.fields.file.url}`}
                className="w-32 h-32"
                alt="Product Icon 2"
              />
            </div>
          )}

      
      <div
        ref={containerRef}
        className="relative z-[9] flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory p-2 py-12 space-x-3 md:p-12 md:space-x-12 scroll-px-4 hide-scrollbar md:pr-[300px]"
      >

        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 z-[7] w-[90vw] md:w-[60vw] h-[60vh] xl:h-[70vh] snap-start"
          >
            <ShowcaseCard
              tag={product.fields.tagline || 'Shop now'}
              title={product.fields.name}
              color={product.fields.color || 'text-blue-300'}
              imageSrc={`https:${product.fields.featuredProductImage.fields.file.url}`}
              slug={product.fields.slug}
            />
          </div>
        ))}
      </div>      
      </div>


      {/* Explore Store Button */}
      <div className="flex justify-center my-16">
        <Link
          href="/store"
          className="bg-white text-primary text-xl font-medium px-5 py-2 rounded-full shadow-lg"
        >
          Explore the <span className="font-extrabold">SCRP</span> store
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
