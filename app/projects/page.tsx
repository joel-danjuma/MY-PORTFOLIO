"use client";
import projects from "@/constants/projects.js";
import { gsap } from "gsap";

const Projects = () => {
  const manageMouseEnter = (e: any, index: any) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };
  const manageMouseLeave = (e: any) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };
  return (
    <section id="project-section" className="w-full h-[100vh] fixed ">
      <h1 className="text-3xl lg:pt-2 pt-20 flex justify-center">Projects</h1>
      <div id="container" className="flex h-[100vh] items-center">
        <div id="projects-container" className="relative w-full">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                onMouseEnter={(e) => {
                  manageMouseEnter(e, index);
                }}
                onMouseLeave={(e) => {
                  manageMouseLeave(e);
                }}
                // onClick={() => {

                // }}
                className="border border-t-black border-b-0 cursor-pointer relative -mb-[2vw] bg-white "
              >
                <p className="m-0 text-[5vw] pl-[10px] uppercase pointer-events-none">
                  {project.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
