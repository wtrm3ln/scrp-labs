import React from 'react';
import Image from 'next/image';

const HoverCard = ({ tag, title, color, imageSrc }) => {
  return (
    <div className="my-6 bg-dark h-full w-full relative rounded-lg overflow-hidden group">
      <div className="relative w-full h-full transition-transform duration-500 transform group-hover:scale-105">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="absolute top-2 left-2 bg-primary rounded-full text-white px-2 py-1 inline-block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Shop now
      </div>

      <div className="absolute bottom-2 left-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <div className="text-white">
          {tag}
        </div>
        <div className={`${color} text-lg font-bold`}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
