'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import WavyLine from './waveLine';
import UnderlineText from './underlineText';
import ServicesDisplay from './serviceDisplay';
import { StarsGroup1, StarsGroup2 } from './stars/starGroup';



const ListItem = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef(null);

  // Use IntersectionObserver to detect visibility in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 1 } // Trigger when 50% of the list item is visible
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

  return (
    <li
      className="md:text-2xl flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <div className="hidden md:block w-4 h-1 rounded-full  bg-white mr-2" />
        <span>
          {text.prefix}
          <div className="relative inline-block ml-1">
            <strong className="font-bold whitespace-nowrap">{text.strongText}</strong>
            <div className={`absolute left-0 w-full ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
              <WavyLine isVisible={isHovered || isVisible} />
            </div>
          </div>
        </span>
      </div>
    </li>
  );
};


const About = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    console.log('isInView:', isInView);
  }, [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.005 } // Adjust threshold as needed
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []); 

  const items = [
    { prefix: 'We Are a Group of', strongText: 'Smart Creative Resourceful People' },
    { prefix: 'SCRP is where', strongText: 'Supreme Creativity Reaches Peak' },
    { prefix: "We've got", strongText: 'Surge of Creative Radical Potential' },
  ];

  const services = [
    { number: 1, text: "FDM 3D Printing & 3D Modelling" , subtext: "End-to-End 3D Modelling & Made- to-Order Printing Solutions ", imageSrc: '/services/1.json'},
    { number: 2, text: "Branding & Creative Direction", subtext: "Creative Branding Solutions & Design Consultation", imageSrc: '/services/2.json' },
    { number: 3, text: "Design Workshops", subtext: "Tailor Made Design Workshops for various Design skills & Softwares", imageSrc: '/services/3.json' },
    { number: 4, text: "Visual Design", subtext: "Graphic Design & Visualisation solutions for your unique needs", imageSrc: '/services/4.json' }
];

  return (
    <div className={`py-10 transition-colors duration-700 text-white ${
      isInView ? 'bg-dark' : 'bg-primary'
    }`}>
      <div id="about" className="md:flex max-w-6xl px-5 md:px-0 pt-20 mx-auto justify-between items-start mb-4">
        <div>
        <Image src='/scrp.png' width='300' height='10'/>
          <p className="text-3xl mt-12">Pronounced as <span className='font-bold'>[Scrap]</span></p>
        </div>
        <div className="hidden md:flex items-center">
        <Image alt="Mumbai" src='/mumbai.png' width='150' height='10'/>
        </div>
      </div>

      <ul ref={aboutRef} className="my-12 md:mb-32 space-y-12 text-lg cursor-default px-5 md:px-0 max-w-6xl mx-auto">
        {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
      </ul>

      
      <div className='relative overflow-hidden'>

      <p className="max-w-6xl mx-auto text-4xl md:text-5xl mt-6 font-delicious text-black rotate-3">We can go</p>

        <div className='scrollContainer rotate-3 md:mb-16'>
        <div className='scrollContent'>
          <p className="text-4xl font-delicious mb-4 text-white whitespace-nowrap">
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
          <StarsGroup1 />

          <h2 
            className="cursor-default max-w-[50vw] text-4xl md:text-5xl font-delicious mx-3 transform transition-transform duration-300 hover:scale-105"
          > 
            <span className="md:text-7xl">Create</span> & Create more stuff!
          </h2>

          <StarsGroup2 />

        </div>

        <div>
          <p className="text-lg md:text-2xl md:leading-8 font-medium mb-20 max-w-3xl mx-auto">SCRP is a <UnderlineText text={"Run-by-Designers creative kitchen. "} />
             We love cooking creatives & products that are suited to your own unique identity. We believe in collaborations that have a lasting impact.
            <br /><br />We cater to a large array of design verticals right from customised <UnderlineText text={"3D Prints, Brand Identities to Creative Direction"} />for your brand  
          </p>
        </div>

        <div id="services" className='flex flex-col items-center gap-3 mt-28 my-12'>
              <Image src="/logo.svg" width={150} height={10} alt="Logo" />
              <p className="font-delicious text-5xl mx-auto">Our Services</p>
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