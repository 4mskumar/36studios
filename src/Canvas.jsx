import React, { useEffect, useRef, useState } from "react";
import images from "./images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Canvas = ({ cDetails }) => {
  const canvasRef = useRef(null);
  const { startIndex, numImages, duration, size, top, left, zIndex } = cDetails;
  const [index, setIndex] = useState({ value: startIndex });

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: 3,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
    gsap.from(canvasRef.current, {
      opacity: 0,
      scale: 0.7,
      duration: 0.5,
      ease: "power2.inOut",
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = images[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.height = canvas.offsetHeight + "px";
      canvas.style.width = canvas.offsetWidth + "px";
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      className="absolute z-[101]"
      ref={canvasRef}
      style={{
        width: `${size * 1.8}px`,
        height: `${size * 1.8}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
    ></canvas>
  );
};

export default Canvas;
