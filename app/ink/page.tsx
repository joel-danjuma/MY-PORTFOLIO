"use client";
import useMousePosition from "@/utils/useMousePosition.js";
import { useState } from "react";
import { motion } from "framer-motion";

const Ink = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 40;

  return (
    <section className="h-full w-full bg-[#0f0f0f] text-[#afa18f] text-[64px] leading-[66px]">
      <div className="h-screen w-11/12 items-center justify-center flex">
        <p className="w-[1000px]">
          Im A <span className="text-[#ec4e39]">creative</span> software
          developer with a focus on producing high quality code - Creating
          impactful and imaginative digital designs
        </p>
      </div>
      <motion.div
        className="h-screen w-11/12 items-center justify-center flex absolute top-0 mask "
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        {/* <p>
          A selectively creative software developer who has not been replaced by
          AI (yet) - Bringing great designs to life for the right pay
        </p> */}
        <p
          className="w-[1000px]"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Im a selective software developer who has not been replaced by AI
          (Yet) - Bringing great designs to life at the right price
        </p>
      </motion.div>
    </section>
  );
};

export default Ink;
