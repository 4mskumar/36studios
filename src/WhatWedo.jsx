import React from "react";

const WhatWedo = ({title, num, desc}) => {
  return (
    <>
      <h3 className="text-2xl flex items-center gap-2  text-black">
        {num} <span className="w-7 h-1 custom-hr bg-black" />
        {title}
      </h3>
      <div className="w-[40%]">
        <p className="text-[2rem] leading-10 text-black ">
          {desc}
        </p>
      </div>
    </>
  );
};

export default WhatWedo;
