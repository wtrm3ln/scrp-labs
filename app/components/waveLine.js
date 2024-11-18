'use client'
import React, { useEffect, useRef } from 'react';

const WavyLine = ({ isVisible, thickness }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set initial dash properties to hide the path
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = isVisible ? '0' : length;

    // Only animate if isVisible is true
    if (isVisible) {
      path.style.transition = 'stroke-dashoffset 1.5s ease';
    } else {
      path.style.transition = 'none';
    }
  }, [isVisible]);

  return (
    <svg width="100%" height="10" viewBox="0 0 669 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={pathRef}
        d="M2 8.32699C24.7796 0.807503 46.677 0.830981 70.3667 4.05407C84.5711 5.98663 98.1713 8.70376 112.562 9.45457C130.034 10.3661 147.348 11.2918 164.846 11.7691C182.162 12.2413 199.328 13.5794 216.655 13.7275C236.656 13.8984 256.654 14.2292 276.654 14.499C286.394 14.6304 296.581 15.4253 306.327 14.2616C336.211 10.6933 365.424 10.4635 395.524 10.4635C412.826 10.4635 432.267 13.0698 449.351 9.7513C459.255 7.82743 468.754 4.52917 478.846 3.51995C502.315 1.17306 525.089 6.59395 548.4 7.19941C588.147 8.23182 627.725 10.4635 667.507 10.4635"
        stroke="white"
        strokeWidth={ thickness? (thickness) : ("3")}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WavyLine;