'use client'
import React, { useEffect, useRef } from 'react';

const Underline = ({ isVisible }) => {
    const pathRef = useRef(null);
  
    useEffect(() => {
      const path = pathRef.current;
      const length = path.getTotalLength();
  
      // Set initial dash properties to hide the path
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = isVisible ? '0' : length;
  
      // Only animate if isVisible is true
      path.style.transition = isVisible ? 'stroke-dashoffset 0.7s' : 'none';
    }, [isVisible]);
  
    return (
      <svg width="100%" height="5" viewBox="0 0 93 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={pathRef}
          d="M2 6C2.26875 3.71868 10.1139 5.40081 11.2601 5.46087C21.4279 5.99365 31.5097 3.44972 41.5556 2.44174C53.2472 1.26862 65.4066 2.77055 77.1384 3.06174C81.7865 3.17711 86.3742 4.05913 91 4.05913"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
};

export default Underline;