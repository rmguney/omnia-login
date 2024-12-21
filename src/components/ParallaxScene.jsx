import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import background from '../assets/background.png';
import cloud from '../assets/cloud.webp';

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
    <div id="scene" ref={sceneRef} className="fixed w-[102%] h-[102%] overflow-hidden -left-[1%] -top-[1%]">
      <div className="absolute w-full h-full bg-cover bg-center bg-no-repeat z-[1]" 
           style={{ backgroundImage: `url(${background})` }}
           data-depth="0.05" />
      <div className="absolute scale-[0.60] w-full h-full bg-no-repeat bg-top top-0 z-[2]"
           style={{ backgroundImage: `url(${cloud})` }}
           data-depth="0.3" />
      <div className="absolute scale-100 w-full h-full bg-no-repeat top-0 z-[2] hidden lg:block"
           style={{ backgroundImage: `url(${cloud})` }}
           data-depth="1" />
      <div className="absolute scale-80 w-full h-full bg-no-repeat bg-right-top z-[2] hidden lg:block"
           style={{ backgroundImage: `url(${cloud})` }}
           data-depth="2.5" />
    </div>
  );
};

export default ParallaxScene;