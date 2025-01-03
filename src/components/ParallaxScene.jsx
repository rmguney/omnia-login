import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import road from '../assets/road.png';
import sky from '../assets/sky.png';
import mountain from '../assets/mountain.png';
import cloud_1 from '../assets/cloud-1.png';
import cloud_2 from '../assets/cloud-2.png';

const ParallaxScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (sceneRef.current) {
      new Parallax(sceneRef.current, {
        relativeInput: true
      });
    }
  }, []);

  return (
    <div id="scene" ref={sceneRef} className="fixed w-[108%] h-[108%] overflow-hidden -left-[4%] -top-[4%]">
      <div className="relative w-full h-full  bg-cover bg-center bg-no-repeat z-[4]" 
           style={{ backgroundImage: `url(${road})` }}
           data-depth="0.40" />
      <div className="relative w-full h-full bg-cover bg-center bg-no-repeat z-[1]" 
           style={{ backgroundImage: `url(${sky})` }}
           data-depth="0.15" />
      <div className="relative w-full h-full bg-cover bg-center bg-no-repeat z-[3]" 
           style={{ backgroundImage: `url(${mountain})` }}
           data-depth="0.3" />
      <div className="relative w-full h-full bg-cover bg-center bg-no-repeat z-[2]" 
           style={{ backgroundImage: `url(${cloud_1})` }}
           data-depth="0.43" />
      <div className="relative w-full h-full bg-cover bg-center bg-no-repeat z-[2]" 
           style={{ backgroundImage: `url(${cloud_2})` }}
           data-depth="0.36" />  

    </div>
  );
};

export default ParallaxScene;