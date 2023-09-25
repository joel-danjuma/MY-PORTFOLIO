"use client";

import { useEffect, useState, useRef } from "react";

// import useMousePosition from "@/utils/useMousePosition.js";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { AiOutlineArrowRight } from "react-icons/ai";

const Ink = () => {
  // const [isHovered, setIsHovered] = useState(false);
  // const { x, y } = useMousePosition();
  // const size = isHovered ? 250 : 40;

  const [tipIndex, setTipIndex] = useState(0);

  const tips = [
    "It is absolutely neccesary to keep Improving",
    "Tip 1",
    "Tip 2",
    "Tip 3",
  ];

  const changeTip = () => {
    setTipIndex((prevIndex: any) => (prevIndex + 1) % tips.length);
  };

  return (
    <section className="lg:w-11/12 w-full">
      <div className="flex flex-col min-h-screen w-full space-y-10 justify-center items-center container">
        <h1 className="lg:text-7xl text-5xl p-2 text-center">
          &apos;{tips[tipIndex]}
        </h1>
        <button
          className="flex-row items-center space-x-2"
          onClick={() => {
            changeTip();
          }}
        >
          <span className="hover:underline ">Give me another tip</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
          </svg>
        </button>
      </div>
    </section>
    // <section className="h-full w-full bg-[#0f0f0f] text-[#afa18f] text-[64px] leading-[66px]">
    //   <div className="h-screen w-11/12 items-center justify-center flex">
    //     <p className="w-[1000px]">
    //       Im A <span className="text-[#ec4e39]">creative</span> software
    //       developer with a focus on producing high quality code - Creating
    //       impactful and imaginative digital designs
    //     </p>
    //   </div>
    //   <motion.div
    //     className="h-screen w-11/12 items-center justify-center flex absolute top-0 mask "
    //     animate={{
    //       WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
    //       WebkitMaskSize: `${size}px`,
    //     }}
    //     transition={{ type: "tween", ease: "backOut" }}
    //   >
    //     {/* <p>
    //       A selectively creative software developer who has not been replaced by
    //       AI (yet) - Bringing great designs to life for the right pay
    //     </p> */}
    //     <p
    //       className="w-[1000px]"
    //       onMouseEnter={() => {
    //         setIsHovered(true);
    //       }}
    //       onMouseLeave={() => {
    //         setIsHovered(false);
    //       }}
    //     >
    //       Im a selective software developer who has not been replaced by AI
    //       (Yet) - Bringing great designs to life at the right price
    //     </p>
    //   </motion.div>
    // </section>
  );
};

export default Ink;
