import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import OurServices from "./OurServices";
import WhatWedo from "./WhatWedo";

const About = () => {
  const [canvas, setCanvas] = useState(false);
  return (
    <div className="  p-5 w-full   text-white">
      <div className="h-[300px] ml-[5rem] flex justify-between px-[26rem] items-start pt-[5rem] b">
        <WhatWedo
          title = {'What we do'}
          num = {'01'}
          desc = {'We aim to revolutionize digital production in the advertising space, bringing your ideas to life.'}
        />
      </div>
          <p className="text-sm w-[30%] ml-[67rem] text-black mt-[10rem]">
            As a contemporary studio, we use cutting-edge design practices and
            the latest technologies to deliver seamless digital work. Our
            commitment to creativity, innovation, and simplicity, paired with
            our agile approach, ensures your journey with us is smooth and
            enjoyable from start to finish.
          </p>
      
    </div>
  );
};

export default About;
