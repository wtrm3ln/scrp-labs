import React from 'react';
import Image from 'next/image';
import Card from './card';


const Showcase = () => {
  return (
    <div className="md:grid grid-cols-2 gap-4 p-4">
        <div className='col-span-2 h-[60vh] md:h-[80vh]'>

            <Card
            tag="Shop now"
            title="Get your Sneakers Flaming!"
            color="text-blue-300"
            imageSrc="/product1.png"
        />
        </div>

      {/* Pixelated heart */}
      <div className='h-[60vh] md:h-[80vh]'>

            <Card
            tag="Shop now"
            title="Get your Sneakers Flaming!"
            color="text-green-500"
            imageSrc="/product2.png"
        />
      </div>

      <div className="grid grid-cols-2 h-[60vh] md:h-[80vh] gap-4">

      <div className='col-span-2'>

        <Card
        tag="Shop now"
        title="Get your Sneakers Flaming!"
        color="text-blue-300"
        imageSrc="/"
        />
    </div>

      {/* New-in */}
      <Card
        tag="Shop now"
        title="Get your Sneakers Flaming!"
        color="text-blue-300"
        imageSrc="/"
      />

      {/* Custom */}
      <Card
        tag="Shop now"
        title="Get your Sneakers Flaming!"
        color="text-blue-300"
        imageSrc="/"
      />

      </div>

      <div className='col-span-2 flex justify-center my-12'>
        <a className="bg-white text-primary text-xl font-medium px-5 py-2 rounded-full shadow-lg">
            Explore the <span className="font-extrabold">SCRP</span> store
        </a>
      </div>
    </div>
  );
};

export default Showcase;