import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, {  useEffect, useRef,useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [screenSize, setScreenSize] = useState(() => {
    return window.innerWidth >= 768 ? 'Desktop' : 'Mobile';
  });
  const projectRef = useRef(null);

  useEffect(() => {
    if (!projectRef.current) return;

    let ctx;

    if (screenSize === 'Desktop') {
      const sections = gsap.utils.toArray(projectRef.current.querySelectorAll('.project-item'));
      ctx = gsap.context(() => {
        sections.forEach((section, i)=>{
          gsap.to(section,{
            height: "55vh",
            scrollTrigger:{
              trigger: section,
              start: `top ${60 - i*45}%`,
              end: `top ${20 - i*45}%`,
              scrub: 2,
            }
          })
        })
      });
    } else if (screenSize === 'Mobile') {
      const sections = gsap.utils.toArray(projectRef.current.querySelectorAll('.project-card'));
      ctx = gsap.context(() => {
        sections.forEach((section, i)=>{
          gsap.from(section,{
            height: "15vh",
            scrollTrigger:{
              trigger: section,
              start: `top ${80 - i*20}%`,
              end: `top ${40 - i*20}%`,
              scrub: 2,
            }
          })
        })
      });
    }

    return () => {
      if (ctx) ctx.revert();
    };
  }, [screenSize]);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth >= 768 ? 'Desktop' : 'Mobile';
      if (screenSize !== newSize) {
        setScreenSize(newSize);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);


  return (
    <div className="text-[8vw] font-[Lausanne-500] text-white pt-[70vh] px-5 ">
      <h1 className="leading-[8vw]">Projets</h1>
      <div ref={projectRef} id="Projects" className=" h-min-[220vh] w-full my-5 gap-5 flex flex-col justify-start items-center">
        <div className="project-item h-fit flex md:flex-row flex-col gap-5  overflow-hidden w-full ">
          <div className=" transition-all project-card hover:rounded-4xl h-[55vw] md:h-full border-black border-4 bg-white text-[4vw] w-full text-black " >view Project</div>
          <div className=" transition-all project-card hover:rounded-4xl h-[55vw] md:h-full border-black border-4 bg-white text-[4vw] w-full text-black " >view Project</div>
        </div>
        <div className="project-item h-fit flex md:flex-row flex-col gap-5  overflow-hidden w-full ">
          <div className=" transition-all project-card hover:rounded-4xl h-[55vw] md:h-full border-black border-4 bg-white text-[4vw] w-full text-black " >view Project</div>
          <div className=" transition-all project-card hover:rounded-4xl h-[55vw] md:h-full border-black border-4 bg-white text-[4vw] w-full text-black " >view Project</div>
        </div>
        <div className="project-item h-fit flex md:flex-row flex-col gap-5  overflow-hidden w-full ">
          <div className=" transition-all project-card hover:rounded-4xl h-[55vw] md:h-full border-black border-4 bg-white text-[4vw] w-full text-black " >view Project</div>
          <div className=" transition-all project-card hover:rounded-4xl h-[55vw] md:h-full border-black border-4 bg-white text-[4vw] w-full text-black " >view Project</div>
        </div>
        <div className="project-item h-fit flex md:flex-row flex-col gap-5  overflow-hidden w-full ">
          <div className=" transition-all project-card hover:rounded-4xl h-[55vw] md:h-full border-black border-4 bg-white text-[4vw] w-full text-black " >view Project</div>
          <div className=" transition-all project-card hover:rounded-4xl h-[55vw] md:h-full border-black border-4 bg-white text-[4vw] w-full text-black " >view Project</div>
        </div>
      </div>
      <div className="h-[99vh] " ></div>
    </div>
  );
};

export default Projects;
