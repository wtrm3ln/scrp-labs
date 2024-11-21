import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShowcaseCard = ({ tag, title, color, imageSrc, slug }) => {
  return (
    <div className={`my-6 bg-dark h-full w-full relative rounded-lg p-2`}>
      <Image
        src={imageSrc}
        alt={title} // Use title as alt text for accessibility
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />

        <div className="absolute bottom-2 w-full flex justify-center">
        <Link href={`/products/${slug}`} className="bg-primary rounded-full text-white px-2 py-1 inline-block mb-2">
          Shop now
        </Link>
        </div>

      <div className="absolute bottom-2 left-2">

        
      </div>
    </div>
  );
};

export default ShowcaseCard;
