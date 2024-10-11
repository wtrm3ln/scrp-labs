'use client'
import React, { useEffect, useRef } from 'react';

const Circle = ({ isVisible }) => {
    const pathRef = useRef(null);
  
    useEffect(() => {
      const path = pathRef.current;
      const length = path.getTotalLength();
  
      // Set initial dash properties to hide the path
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = isVisible ? '0' : length;
  
      // Only animate if isVisible is true
      path.style.transition = isVisible ? 'stroke-dashoffset 1.5s ease' : 'none';
    }, [isVisible]);
  
    return (
      <svg width="100%" height="100%" viewBox="0 0 301 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref={pathRef} d="M104.202 17.0215C75.437 17.0215 58.8085 20.3865 32.1122 27.7425C3.74585 35.5586 -11.3051 57.4881 17.5645 66.0477C36.2228 71.5797 59.3372 73.3502 79.4817 74.6468C116.111 77.0044 153.215 75.64 189.621 72.4877C216.93 70.1231 242.9 67.8563 268.612 61.3374C283.766 57.4955 303.385 50.7028 297.439 38.0167C282.771 6.72015 214.921 3.65148 173.612 2.33745C130.347 0.961198 80.9546 3.57932 40.37 14.1923C28.5716 17.2776 20.0074 20.5135 14.3729 27.7425" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>
      
    );
};

export default Circle;