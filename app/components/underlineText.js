'use client'
import WavyLine from "./waveLine";
import { useState } from "react";

const UnderlineText = ({ text , thickness}) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      > 
        <span className="relative inline-block ml-1 cursor-default">
            <strong className="font-bold mr-2">{text}</strong>
            <div className={`absolute left-0 w-full ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <WavyLine isVisible={isHovered} thickness={thickness}/>
            </div>
        </span>
      </span>
    );
  };

export default UnderlineText