import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRef = useRef(null);

  useGSAP(() => {
    if (!projectRef.current) return;

    const sections = gsap.utils.toArray(projectRef.current.querySelectorAll('.project-item'));
    
    gsap.set(sections, { height: "20vh" });
    
    gsap.to(sections, {
      height: "55vh",
      ease: "none",
      stagger: {
        amount: 0.9,
      },
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 100%",
        end: "top -150%",
        scrub: 0,
        markers: true,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: projectRef });

  return (
    <div className="text-[8vw] font-[Lausanne-500] text-white pt-[50vh] px-5 ">
      <h1 className="leading-[8vw]">Projets</h1>
      <div ref={projectRef} id="Projects" className="h-[210vh] w-full my-5 gap-5 bg-amber-400 flex flex-col justify-start items-center">
        <div className="project-item h-[55vh] hover:rounded-4xl overflow-hidden w-full bg-red-500"></div>
        <div className="project-item h-[55vh] hover:rounded-4xl overflow-hidden w-full bg-blue-700"></div>
        <div className="project-item h-[55vh] hover:rounded-4xl overflow-hidden w-full bg-red-500"></div>
        <div className="project-item h-[55vh] hover:rounded-4xl overflow-hidden w-full bg-blue-700"></div>
      </div>
    </div>
  );
};

export default Projects;
