'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import WavyLine from './waveLine';


const ListItem = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <div className="w-4 h-0.5 bg-white mr-2" />
        <span>
          {text.prefix}
          <div className="relative inline-block ml-1">
            <strong className="font-bold">{text.strongText}</strong>
            <div className={`absolute left-0 w-full ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
              <WavyLine isVisible={isHovered} />
            </div>
          </div>
        </span>
      </div>
    </li>
  );
};


const About = () => {

  const items = [
    { prefix: 'We Are a Group of', strongText: 'Smart Creative Resourceful People' },
    { prefix: 'SCRP is where', strongText: 'Supreme Creativity Reaches Peak' },
    { prefix: "We've got", strongText: 'Surge of Creative Radical Potential' },
  ];

  return (
    <div className="text-white py-10">
      <div className="md:flex max-w-6xl px-5 md:px-0 mx-auto justify-between items-start mb-4">
        <div>
        <Image src='/scrp.png' width='300' height='10'/>
          <p className="text-3xl mt-12">Pronounced as <span className='font-bold'>[Scrap]</span></p>
        </div>
        <div className="hidden md:flex items-center">
        <Image src='/mumbai.png' width='100' height='10'/>
        </div>
      </div>

      <ul className="my-6 space-y-4 cursor-default px-5 md:px-0 max-w-6xl mx-auto">
        {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
      </ul>

      
      <div className='relative overflow-hidden'>

      <p className="max-w-6xl mx-auto text-4xl md:text-5xl mt-6 font-delicious text-black rotate-3">We can go</p>

        <div className='scrollContainer rotate-3 md:mb-16'>
        <div className='scrollContent'>
          <p className="text-4xl font-delicious mb-4 whitespace-nowrap">
          {Array(40).fill('& on ').join('')}
        </p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto flex flex-row-reverse my-2'>
      <p className="text-4xl md:text-5xl font-delicious text-black -rotate-2">but here is what we are!</p>
      </div>
      </div>

      <div className='max-w-6xl mt-28 mx-auto text-center'>

        <p className="text-3xl mb-20">A new-age Creative Space run by young adults.</p>

        <p className="text-3xl">What do we do?</p>

        <div className="relative flex items-center justify-center mt-6 mb-36">
          <Image src='/star1.png' width='100' height='20'/>

          <h2 className="text-4xl md:text-5xl font-delicious mx-3"> <span className='md:text-7xl'>Create</span> & Create more stuff!</h2>

          <Image src='/star2.png' width='160' height='20'/>
        </div>

        <div className="md:flex justify-between md:space-x-20 mb-8">
          {[
            { number: 1, text: "Curated Custom 3D articles" },
            { number: 2, text: "3D print your very own models" },
            { number: 3, text: "Learn the basics of 3D Printing" }
          ].map((item) => (
            <div key={item.number} className="text-center flex md:flex-col justify-center items-center my-12">
              <div className="w-16 h-16 rounded-full bg-white text-primary font-delicious flex items-center justify-center text-5xl font-bold mx-auto mb-2">
                {item.number}
              </div>
              <p className="md:w-48 font-delicious text-3xl mx-auto">{item.text}</p>
            </div>
          ))}
        </div>

        <a href='/' className="bg-white hover:bg-gray-100 text-primary text-xl font-medium px-5 py-2 rounded-full shadow-lg">
            Explore our Services
        </a>

      </div>

    </div>
  );
};

export default About;