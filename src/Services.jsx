import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import React, { useState } from "react";
import WhatWedo from "./WhatWedo";

const Services = () => {
  const [serviceDialog, setServiceDialog] = useState(false);
  const [animationBox, setAnimationBox] = useState(false);
  const [techBox, setTechBox] = useState(false);
  const [projectBox, setProjectBox] = useState(false);
  const [designBox, setDesignBox] = useState(false);

  const serviceRef = useRef(null);
  const animationRef = useRef(null);
  const techRef = useRef(null);
  const projectRef = useRef(null);
  const designRef = useRef(null);

  useEffect(() => {
    const animateBox = (ref, isOpen) => {
      if (ref.current) {
        gsap.to(ref.current, {
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          duration: 0.8,
          ease: "power2.inOut",
          overflow: "hidden",
        });
      }
    };

    animateBox(serviceRef, serviceDialog);
    animateBox(animationRef, animationBox);
    animateBox(techRef, techBox);
    animateBox(projectRef, projectBox);
    animateBox(designRef, designBox);
  }, [serviceDialog, animationBox, techBox, projectBox, designBox]);

  return (
    <div className="flex mt-[5rem] gap-5 text-black flex-col flex-1 justify-between">
      <div
        className="flex justify-between border-b-[1px] border-black pb-2 px-[40rem]"
        onClick={() => setServiceDialog((prev) => !prev)}
      >
        <p className="text-xl">Creative</p>
        <p className="px-5 cursor-pointer text-xl py-1 outline-none rounded-full">
          {serviceDialog ? "-" : "+"}
        </p>
      </div>
      <div ref={serviceRef} className=" overflow-hidden">
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Art Direction</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Project Direction</p>
        </div>
      </div>

      <div
        className="flex justify-between border-b-[1px] border-black pb-2 px-[40rem]"
        onClick={() => setAnimationBox((prev) => !prev)}
      >
        <p className="text-xl">Animation</p>
        <p className="px-5 cursor-pointer text-xl py-1 outline-none rounded-full">
          {animationBox ? "-" : "+"}
        </p>
      </div>
      <div ref={animationRef} className=" overflow-hidden">
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">2D Animation</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">3D Animation</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Text Animation</p>
        </div>
      </div>

      <div
        className="flex justify-between border-b-[1px] border-black pb-2 px-[40rem]"
        onClick={() => setTechBox((prev) => !prev)}
      >
        <p className="text-xl">Technology</p>
        <p className="px-5 cursor-pointer text-xl py-1 outline-none rounded-full">
          {techBox ? "-" : "+"}
        </p>
      </div>
      <div ref={techRef} className=" overflow-hidden">
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Development</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Implementation</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Prototyping</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Testing</p>
        </div>
      </div>

      <div
        className="flex justify-between border-b-[1px] border-black pb-2 px-[40rem]"
        onClick={() => setProjectBox((prev) => !prev)}
      >
        <p className="text-xl">PROJECT DELIVERY</p>
        <p className="px-5 cursor-pointer text-xl py-1 outline-none rounded-full">
          {projectBox ? "-" : "+"}
        </p>
      </div>
      <div ref={projectRef} className=" overflow-hidden">
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Product Strategy</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Product Management</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Team Direction</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Testing</p>
        </div>
      </div>

      <div
        className="flex mb-8 justify-between border-b-[1px] border-black pb-2 px-[40rem]"
        onClick={() => setDesignBox((prev) => !prev)}
      >
        <p className="text-xl">DESIGN</p>
        <p className="px-5 cursor-pointer text-xl py-1 outline-none rounded-full">
          {designBox ? "-" : "+"}
        </p>
      </div>
      <div ref={designRef} className=" overflow-hidden">
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">UI/UX</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">3D Design</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Graphic Design</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Web Design</p>
        </div>
        <div className="border-b-[1px] service-box border-gray-300 py-3 px-[40rem]">
          <p className="text-sm">Brand Design</p>
        </div>
      </div>
      <div className="w-[60%] mb-[10rem] pl-[40rem] mt-[5rem] text-sm">
        <p>Got a project in mind?</p>
        <p>
          Drop us a line at hello@thirtysixstudio.com or use the form below.
        </p>
        <p className="mt-5">
          Not sure what you need? We’re here to help you define the undefined.
          Let's explore all creative and technical possibilities together
          through one of our tailored labs, where we champion future-forward
          thinking within an ethical framework.
        </p>
        <button className="border-[1px] border-black text-[1rem] mt-5 px-5 py-1 rounded-full font-semibold text-black">
          Talk to us
        </button>
      </div>
      <div className="h-[300px] ml-[5rem] flex justify-between px-[26rem] items-start pt-[5rem] border-t-[1px] border-gray-200">
        <WhatWedo
          title={"Who we are"}
          num={"02"}
          desc={
            "Our vision is to simplify digital production while creating social impact and opportunity."
          }
        />
      </div>
    </div>
  );
};

export default Services;
