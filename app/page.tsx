"use client";
import useMousePosition from "@/utils/useMousePosition.js";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import img from "@/public/images/Subject_2.png";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 20;
  return (
    <section
      id="hero-section"
      className="lg:w-11/12 w-full h-full flex flex-col scrollbar lg:fixed cursor-circle"
    >
      <div className="w-full h-[25vh] lg:mt-2 mt-20 flex lg:justify-start justify-center lg:pr-3 lg:text-8xl text-5xl">
        <div>
          <h1 className="lg:w-[1150px] w-full lg:p-0 p-2">
            I&apos;M A CREATIVE SOFTWARE DEVELOPER AND BLOCKCHAIN ENTHUSIAST.
          </h1>
        </div>
        <motion.div
          className="h-full w-full lg:absolute lg:block hidden top-2 mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <h1
            className="w-[1150px]"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            I&apos;M A <span className="text-[#ec4e39]">SELECTIVE</span>{" "}
            SOFTWARE DEVELOPER AND BLOCKCHAIN{" "}
            <span className="text-[#ec4e39]">MAXIMALIST.</span>
          </h1>
        </motion.div>
      </div>

      {/* CONNECT PAGE */}
      <div className="absolute bottom-0 w-full bg-white">
        <div className="flex flex-row w-full h-[20vh] justify-start content-center border border-t-black border-b-black border-l-0 border-r-0 ">
          <h1 className="lg:text-8xl text-5xl">
            LET&apos;S START A PROJECT 🤝
          </h1>
        </div>
        {/* <div className="lg:flex hidden flex-col h-32 absolute bottom-2 right-3 hover:text-red-500 ">
          <TfiArrowTopRight className="w-28 h-28" />
          <h1 className="flex justify-end px-2 text-3xl">CONNECT</h1>
        </div> */}
        {/* <motion.div
          className="lg:block hidden flex-col h-32 absolute bottom-2 right-3 hover:text-red-500"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <TfiArrowTopRight
            className="w-28 h-28"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          />
          <h1 className="flex justify-end px-2 text-3xl">CONNECT</h1>
        </motion.div> */}
      </div>
    </section>
  );
}
