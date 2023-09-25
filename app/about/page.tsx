"use client";
import useMousePosition from "@/utils/useMousePosition.js";
import { useState } from "react";
import { motion } from "framer-motion";
const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 40;
  return (
    <section
      id="about-section"
      className="w-full h-screen z-0 relative overscroll-auto"
    >
      <div className="flex flex-col w-full lg:top-0 gap-4 absolute text-justify top-20 p-2 ">
        <h1 className="lg:text-5xl text-4xl w-full flex justify-center">
          About me :
        </h1>
        <p className="lg:text-4xl text-xl ">
          I am an experienced software developer who would be a perfect fit for
          a full-stack developer position. <br />
          My speciality is backend programming using languages and frameworks
          like Python, NodeJs, ExpressJs, and FastAPI. I have also acquired
          experience in blockchain development, working with Apeworx, Hardhat,
          Moralis SDK, and Alchemy SDK for development and deployment of DAPPs.{" "}
          <br />
          Im skilled in JavaScript, HTML,CSS, React, NextJs, and tailwind CSS on
          the front end. Consequently, I appreciate designing and developing
          engaging user interfaces for the front end. I am a versatile developer
          with expertise in both backend and frontend development. Also, I am
          always interested in learning new technologies and following business
          trends.
          <br />
          I consider myself to be a committed, detail-oriented full-stack
          developer who consistently works to advance my abilities and produce
          high-quality code. <br />I am very enthusiastic about my work and I
          look forward to working with you to create your next web application.
        </p>
      </div>
      {/* <div className="flex flex-col w-full absolute top-20">This is a text</div> */}
      <motion.div
        className="lg:flex flex-col w-full h-full lg:top-0 absolute text-justify top-20 p-2 hidden mask gap-4"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <h1
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="lg:text-5xl text-4xl w-full flex justify-center"
        >
          About me :
        </h1>
        <p
          className="lg:text-4xl text-3xl "
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          I am an experienced software developer who would be a perfect fit for
          a full-stack developer position. <br />
          My speciality is backend programming using languages and frameworks
          like Python, NodeJs, ExpressJs, and FastAPI. I have also acquired
          experience in blockchain development, working with Apeworx, Hardhat,
          Moralis SDK, and Alchemy SDK for development and deployment of DAPPs.{" "}
          <br />
          Im skilled in JavaScript, HTML,CSS, React, NextJs, and tailwind CSS on
          the front end. Consequently, I appreciate designing and developing
          engaging user interfaces for the front end. I am a versatile developer
          with expertise in both backend and frontend development. Also, I am
          always interested in learning new technologies and following business
          trends.
          <br />
          I consider myself to be a committed, detail-oriented full-stack
          developer who consistently works to advance my abilities and produce
          high-quality code. <br />I am very enthusiastic about my work and I
          look forward to working with you to create your next web application.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
