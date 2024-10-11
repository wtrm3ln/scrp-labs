import React from 'react';
import Image from 'next/image';

const Card = ({ tag, title, color, imageSrc }) => {
  return (
    <div className={`my-6 bg-dark h-full w-full relative rounded-lg p-2`}>
      <Image
        src={imageSrc}
        alt={title} // Use title as alt text for accessibility
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />

        <div className="absolute top-2 left-2 bg-primary rounded-full text-white px-2 py-1 inline-block mb-2">
          Shop now
        </div>

      <div className="absolute bottom-2 left-2">

      <div className="text-white">
        {tag} {/* Display the tag dynamically */}
      </div>
      <div className={`${color} text-lg font-bold`}>
        {title} {/* Display the title dynamically */}
      </div>
        
      </div>
    </div>
  );
};

export default Card;
