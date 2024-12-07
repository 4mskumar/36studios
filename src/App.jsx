import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import "./index.css";
import LocomotiveScroll from "locomotive-scroll";
import Nav from "./Nav";
import Hero from "./Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import About from "./About";
import OurServices from "./OurServices";
import Services from "./Services";

export default function App() {
  const [canvas, setCanvas] = useState(false);
  const spanRef = useRef(null);
  const h1Ref = useRef(null);

  const [zedex, setZedex] = useState(false);

  // Initialize LocomotiveScroll
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(spanRef.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.5,
            ease: "power2.inOut",
            // color : 'white',
          });

          gsap.to(spanRef.current, {
            scale: 1000,
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(spanRef.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            // border:'1px solid #000' ,
            backgroundColor: "#fff",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = h1Ref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Circle Span Element */}
      <span
        ref={spanRef}
        className="growing z-[0] bg-red-500 rounded-full block fixed top-0 left-0 w-1 h-1 pointer-events-none"
      ></span>
      {/* Main Content */}
      <div className={`w-full relative mb-[10rem] text-white min-h-screen`}>
        {canvas &&
          data[0].map((cDetails, ind) => (
            <Canvas key={ind} cDetails={cDetails} />
          ))}
        <Nav />
        <Hero refer={h1Ref} />
      </div>
      <div className="w-full relative border-t-[1px] text-white min-h-screen">
        {canvas &&
          data[1].map((cDetails, ind) => (
            <Canvas key={ind} cDetails={cDetails} />
          ))}
        <About />
        <div className="px-[20rem]">
          <OurServices />
        </div>
      </div>
      <div className="w-full relative border-t-[1px] text-white min-h-screen">
        {canvas &&
          data[2].map((cDetails, ind) => (
            <Canvas key={ind} cDetails={cDetails} />
          ))}
        <Services />
      </div>
    </>
  );
}
