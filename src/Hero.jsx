import React from "react";

const Hero = ({ refer }) => {
  return (
    <div className="mt-[5rem]   z-[1] relative">
      <div className="text-black w-[30%] relative ml-[30rem]">
        <h1 className="text-3xl">
          At Thirtysixstudio, we build immersive digital experiences for brands
          with a purpose.
        </h1>
        <p className="mt-10 text-sm font-light">
          We're a boutique production studio focused on design, motion, and
          creative technology, constantly reimagining what digital craft can do
          for present-time ads and campaigns.
        </p>
        <p className="mt-10">Scroll</p>
      </div>
      {/* Add relative positioning and lower z-index */}
      <h1
        ref={refer}
        id="text"
        className="mt-[22.5rem] text-black text-[18.5rem] leading-10 relative z-[-1]"
      >
        Thirtysixstudio
      </h1>
    </div>
  );
};

export default Hero;
