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

const ServicesDisplay = ({ imageSrc, text, subtext }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="text-center flex flex-col justify-center items-center my-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center mb-2">
        <Image src={imageSrc} width="150" height="50" />
      </div>

      <div className="relative inline-block w-full mb-3">
        <strong className="font-bold md:w-48 font-delicious text-xl">{text}</strong>
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


const About = () => {

  const items = [
    { prefix: 'We Are a Group of', strongText: 'Smart Creative Resourceful People' },
    { prefix: 'SCRP is where', strongText: 'Supreme Creativity Reaches Peak' },
    { prefix: "We've got", strongText: 'Surge of Creative Radical Potential' },
  ];

  const services = [
    { number: 1, text: "FDM 3D Printing & 3D Modelling" , subtext: "End-to-End 3D Modelling & Made- to-Order Printing Solutions ", imageSrc: '/services/1.png'},
    { number: 2, text: "Branding & Creative Direction", subtext: "Creative Branding Solutions & Design Consultation", imageSrc: '/services/2.png' },
    { number: 3, text: "Design Workshops", subtext: "Tailor Made Design Workshops for various Design skills & Softwares", imageSrc: '/services/3.png' },
    { number: 4, text: "Visual Design", subtext: "Graphic Design & Visualisation solutions for your unique needs", imageSrc: '/services/4.png' }
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

        <p className="text-3xl font-medium mb-20">A new-age Creative Space run by young adults.</p>

        <p className="text-3xl font-medium">What do we do?</p>

        <div className="relative flex items-center justify-center mt-6 mb-36">
          <Image src='/star1.png' width='100' height='20'/>

          <h2 className="text-4xl md:text-5xl font-delicious mx-3"> <span className='md:text-7xl'>Create</span> & Create more stuff!</h2>

          <Image src='/star2.png' width='160' height='20'/>
        </div>

        <div>
          <p className="text-xl font-medium mb-20 max-w-3xl mx-auto">SCRP is a Run-by-Designers creative kitchen. 
            We love cooking creatives & products that are suited to your own unique identity. We believe in collaborations that have a lasting impact.
            <br /><br />We cater to a large array of design verticals right from customised 3D Prints, Brand Identities to Creative Direction for your brand  
          </p>
        </div>

        <div id="services" className='flex flex-col items-center gap-3 pt-28'>
              <Image src="/logo.svg" width={80} height={10} alt="Logo" />
              <p className="md:w-48 font-delicious text-3xl mx-auto">Our Services</p>
        </div>

        <div className="grid md:grid-cols-2 justify-center justify-items-center mb-8">
          {services.map((service) => (
            <ServicesDisplay
              key={service.number}
              imageSrc={service.imageSrc}
              text={service.text}
              subtext={service.subtext}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default About;