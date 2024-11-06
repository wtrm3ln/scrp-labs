import React from 'react';
import Image from 'next/image';
import ShowcaseCard from './Cards/ShowcaseCard';
import Link from 'next/link'

const cardData = [
  {
    tag: "Shop now",
    title: "Get your Sneakers Flaming!",
    color: "text-blue-300",
    imageSrc: "/product1.png"
  },
  {
    tag: "Shop now",
    title: "Get your Sneakers Flaming!",
    color: "text-green-500",
    imageSrc: "/product2.png"
  },
  {
    tag: "Shop now",
    title: "Get your Sneakers Flaming!",
    color: "text-blue-300",
    imageSrc: "/product3.png"
  },
  {
    tag: "Shop now",
    title: "Get your Sneakers Flaming!",
    color: "text-blue-300",
    imageSrc: "/product4.png"
  },
];

const Showcase = () => {
  return (
    <div>
      {/* Horizontal Scrollable Section */}
      <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory pl-12 py-12 space-x-12 scroll-px-4 hide-scrollbar">
        {cardData.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-[60vw] h-[60vh] md:h-[80vh] snap-center">
            <ShowcaseCard
              tag={card.tag}
              title={card.title}
              color={card.color}
              imageSrc={card.imageSrc}
            />
          </div>
        ))}
      </div>

      {/* Explore Store Button */}
      <div className="flex justify-center my-12">
        <Link href="/store" className="bg-white text-primary text-xl font-medium px-5 py-2 rounded-full shadow-lg">
          Explore the <span className="font-extrabold">SCRP</span> store
        </Link>
      </div>
    </div>
  );
};

export default Showcase;