import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import projectData from "../components/projects/projectData";
import BottomContact from "../components/contact/bottomContact";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const ProjectDescriptionRef = useRef(null);

  

  const [screenSize, setScreenSize] = useState(() => {
    return window.innerWidth >= 768 ? "Desktop" : "Mobile";
  });
  const projectRef = useRef(null);

  useEffect(() => {
    if (!projectRef.current) return;

    let ctx;

    if (screenSize === "Desktop") {
      const card = gsap.utils.toArray(
        projectRef.current.querySelectorAll(".project-card")
      );
      let sections = [];
      for (let i = 0; i < card.length / 2; i++) {
        if (card[i * 2 + 1] !== undefined)
          sections.push([card[i * 2], card[i * 2 + 1]]);
        else sections.push([card[i * 2]]);
      }
      ctx = gsap.context(() => {
        sections.forEach((section, i) => {
          gsap.to(section, {
            height: "55vh",
            scrollTrigger: {
              trigger: section,
              start: `top ${80 - i * 44}%`,
              end: `top ${40 - i * 44}%`,
              scrub: 1,
            },
          });
        });
      });
    } else if (screenSize === "Mobile") {
      const sections = gsap.utils.toArray(
        projectRef.current.querySelectorAll(".project-card")
      );
      ctx = gsap.context(() => {
        sections.forEach((section, i) => {
          gsap.from(section, {
            height: "15vh",
            scrollTrigger: {
              trigger: section,
              start: `top ${60 - i * 10}%`,
              end: `top ${50 - i * 10}%`,
              scrub: 1,
            },
          });
        });
      });
    }

    return () => {
      if (ctx) ctx.revert();
    };
  }, [screenSize]);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth >= 768 ? "Desktop" : "Mobile";
      if (screenSize !== newSize) {
        setScreenSize(newSize);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  useGSAP(() => {
    gsap.to(ProjectDescriptionRef.current, {
        y: "-80px",
        opacity: 0,
        duration: 0,
      });
  })
  const handleProjectHover = (
    SomeText1 = "nil",
    SomeText2 = "nil",
    year = "nil"
  ) => {
    function setValues() {
      ProjectDescriptionRef.current.querySelector("#Sometext-one").textContent =
        SomeText1;
      ProjectDescriptionRef.current.querySelector("#Sometext-two").textContent =
        SomeText2;
      ProjectDescriptionRef.current.querySelector("#Year").textContent = year;
    }

    const projectDescriptionTl = gsap.timeline();

    if (SomeText1 !== "nil") {
      projectDescriptionTl.call(setValues);
      projectDescriptionTl.fromTo(
        ProjectDescriptionRef.current,
        {
          y: "-80px",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
    } else {
      projectDescriptionTl.to(ProjectDescriptionRef.current, {
        y: "-80px",
        opacity: 0,
        duration: 0.5,
      });
    }
  };

  return (
    <div className="text-[8vw] font-[Lausanne-300] text-white pt-[60vh] ">
      <div
        ref={ProjectDescriptionRef}
        className=" h-40 flex z-10 flex-col-reverse -m-[3px] bg-black fixed top-0 left-0 "
      >
        <div className=" text-sm md:text-2xl h-20 w-screen bg-black border-y-2 border-white px-10 py-2  left-0 flex items-center justify-between ">
          <span id="Sometext-one">Nil</span>
          <span id="Sometext-two">Nil</span>
          <span className=" md:block hidden " id="Year">Nil</span>
        </div>
      </div>
      <div className=" flex h-fit ">
        <h1 className="leading-[8vw] pt-[4vh] uppercase text-[18vw] md:text-[12vw] justify-start ">
          Projets
        </h1>
        <span className=" text-[4vh] ">{projectData.length}</span>
      </div>
      <div
        ref={projectRef}
        id="Projects"
        className=" h-min-[220vh] w-full my-5 gap-5 flex flex-col md:grid md:grid-cols-2 justify-start items-center"
      >
        {projectData.map((project, index) => {
          return (
            <>
              <div
                onMouseEnter={() =>
                  handleProjectHover(
                    project.SomeText1,
                    project.SomeText2,
                    project.year
                  )
                }
                onMouseLeave={() => handleProjectHover()}
                className="group md:col-span-1 hover:scale-x-98 transition-all project-card hover:rounded-4xl h-[55vw] md:h-full overflow-hidden text-[4vw] w-full text-black "
              >
                <div
                  className=" group-hover:scale-125 transition-transform h-full w-full bg-cover bg-center flex justify-center items-center "
                  style={{
                    backgroundImage: `url(/images/projets/${project.image})`,
                  }}
                >
                  <div className=" opacity-0 group-hover:opacity-100  bg-black/20 transition-all w-full h-full flex justify-center items-center  ">
                    <h3 className=" cursor-pointer border-2 border-[#d3fd50] group-hover:scale-75 hover:bg-[#d3fd50] text-[#d3fd50] hover:text-black transition-all duration-300 px-10 rounded-full text-[4vw] ">
                      Voir Projet
                    </h3>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <BottomContact />
    </div>
  );
};

export default Projects;
