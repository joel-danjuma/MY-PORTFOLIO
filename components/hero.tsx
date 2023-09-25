"use client";
import useMousePosition from "@/utils/useMousePosition.js";
import { TfiArrowTopRight } from "react-icons/tfi";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/nav";

import Image from "next/image";
import img from "@/public/images/Subject_2.png";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 20;
  return (
    <section
      id="hero-section"
      className="w-full h-screen flex flex-col scrollbar top-[4rem]"
    >
      {/* <Nav /> */}
      <div className="w-full h-full lg:mt-2 mt-20 flex lg:justify-start justify-center lg:pr-3 lg:text-8xl text-5xl relative">
        <div>
          <h1 className="lg:w-[1150px] w-full lg:p-0 p-2">
            I&apos;M A CREATIVE SOFTWARE DEVELOPER AND BLOCKCHAIN ENTHUSIAST.
          </h1>
        </div>
        <motion.div
          className="h-full w-full lg:absolute lg:block hidden top-0 mask"
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
    </section>
  );
};

export default Hero;
