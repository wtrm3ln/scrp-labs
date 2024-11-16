import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HoverCard = ({ tag, title, color, imageSrc, slug }) => {
  return (
    <Link href={`/store/${slug}`} className="my-6 bg-dark h-full w-full relative rounded-lg overflow-hidden group">
      <div className="relative w-full overflow-hidden rounded-lg h-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="md:grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 transform"
        />
      </div>

      <div className="absolute bottom-3 left-3 transition-opacity duration-300 text-white">
        <div className="text-white">
          {tag}
        </div>
        <div className={`${color} text-lg font-bold`}>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default HoverCard;
