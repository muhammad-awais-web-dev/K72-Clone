import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, {  useEffect, useRef,useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const ProjectDescriptionRef = useRef(null)

  const projectData = [
  { SomeText1: 'La pharmacie de tout le monde', SomeText2: 'Jean Coutu', year: '2024', image: 'PJC_SiteK72_Thumbnail_1280x960.jpg' }, 
  { SomeText1: 'Widescape', SomeText2: 'Widescape', year: '2022', image: 'WS---K72-ca---Thumbnail.jpg' }, 
  { SomeText1: 'OKA', SomeText2: 'OKA', year: '2022', image: 'OKA_thumbnail.jpg' }, 
  { SomeText1: 'Opto-Réseau', SomeText2: 'Opto-Réseau', year: '2021', image: 'opto_thumbnail2.jpg' }, 
  { SomeText1: 'Coup Fumant', SomeText2: 'Coup Fumant', year: '2021', image: 'CF_thumbnail.jpg' }, 
  { SomeText1: 'Shelton', SomeText2: 'Bièrerie Shelton', year: '2020', image: 'thumbnailimage_shelton.jpg' }, 
  { SomeText1: 'Best', SomeText2: 'GardaWorld', year: '2021', image: 'BEST_site_menu_Thumbnail.jpg' }, 
  { SomeText1: 'À table avec l\'histoire', SomeText2: 'La Fondation BAnQ', year: '2021', image: 'thumbnailimage_atable2.jpg' }, 
  { SomeText1: 'La Coop fédérée devient Sollio Groupe Coopératif', SomeText2: 'Sollio', year: '2019', image: 'thumbnailimage_SollioAg.jpg' }, 
  { SomeText1: 'Lamajeure', SomeText2: 'Lamajeure', year: '2019', image: 'chalaxeur-thumbnail_img.jpg' }, 
  { SomeText1: 'Synesthésie', SomeText2: 'Orchestre Symphonique de Montréal', year: '2019', image: 'thumbnail_OSM_1280.jpg' }, 
  { SomeText1: '100 Temps', SomeText2: 'La Fondation BAnQ', year: '2020', image: '100temps_Thumbnail.jpg' }, 
  { SomeText1: 'Crisis24', SomeText2: 'GardaWorld', year: '2021', image: 'crisis24_behance_1920X1200_cartes.jpg' }, 
  { SomeText1: 'On vous voit comme personne', SomeText2: 'Opto-Réseau', year: '2020', image: 'thumbnailimage_opto.jpg' }, 
  { SomeText1: 'Ouvert', SomeText2: 'PME MTL', year: '2020', image: 'PME-MTL_Thumbnail.jpg' }, 
  { SomeText1: 'Fruité', SomeText2: 'Lassonde', year: '2019', image: 'Fruite_thumbnail_bbq.jpg' } 
];


  const [screenSize, setScreenSize] = useState(() => {
    return window.innerWidth >= 768 ? 'Desktop' : 'Mobile';
  });
  const projectRef = useRef(null);

  useEffect(() => {
    if (!projectRef.current) return;

    let ctx;

    if (screenSize === 'Desktop') {
      const card = gsap.utils.toArray(projectRef.current.querySelectorAll('.project-card'));
      let sections = [];
      for(let i=0; i<card.length/2; i++){
        if (card[i*2+1] !== undefined)sections.push([card[i*2], card[i*2+1]]);
        else sections.push([card[i*2]]);
      }
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

  const handleProjectHover = (SomeText1 = "nil" , SomeText2 = "nil", year = "nil") => {
    function setValues(){
      ProjectDescriptionRef.current.querySelector("#Sometext-one").textContent = SomeText1;
      ProjectDescriptionRef.current.querySelector("#Sometext-two").textContent = SomeText2;
      ProjectDescriptionRef.current.querySelector("#Year").textContent = year;
    }

    const projectDescriptionTl = gsap.timeline();

    if (SomeText1 !== "nil"){
      projectDescriptionTl.call(setValues)
      projectDescriptionTl.fromTo(ProjectDescriptionRef.current,{
        y:-5,
        opacity:0,
      },{
        y:0,
        opacity:1,
        duration:0.5
      })
    }
    else{
      projectDescriptionTl.to(ProjectDescriptionRef.current,{
        y:-5,
        opacity:0,
        duration:0.5
      })
    }
  }

  return (
    <div className="text-[8vw] font-[Lausanne-300] text-white pt-[60vh] px-5 ">
      <div ref={ProjectDescriptionRef} className=" h-40 flex flex-col-reverse -m-[3px] bg-black fixed top-0 left-0 " >
        <div  className=" text-sm md:text-2xl h-20 w-screen bg-black border-y-2 border-white px-10 py-2  left-0 flex items-center justify-between " >
          <span id="Sometext-one" >Nil</span>
          <span id="Sometext-two" >Nil</span>
          <span id="Year" >Nil</span>
        </div>
      </div>
      <div className=" flex h-fit " >
      <h1 className="leading-[8vw] pt-[4vh] uppercase text-[18vw] md:text-[12vw] justify-start ">Projets</h1>
      <span className=" text-[4vh] " >{projectData.length}</span>
      </div>
      <div ref={projectRef} id="Projects" className=" h-min-[220vh] w-full my-5 gap-5 flex flex-col md:grid md:grid-cols-2 justify-start items-center">
          {projectData.map((project, index) => {
            return(
              <>
                <div onMouseEnter={() => handleProjectHover(project.SomeText1, project.SomeText2, project.year)} onMouseLeave={() => handleProjectHover()} className="group md:col-span-1 transition-all project-card hover:rounded-4xl h-[55vw] md:h-full overflow-hidden text-[4vw] w-full text-black " >
                  <div className=" h-full w-full bg-cover bg-center flex justify-center items-center " style={{backgroundImage: `url(/images/projets/${project.image})`}} >
                    <div className=" opacity-0 group-hover:opacity-100 bg-black/20 transition-all w-full h-full flex justify-center items-center  " >
                      <h3 className=" border-2 border-[#d3fd50] text-[#d3fd50] px-10 rounded-full text-[4vw] " >Voir Projet</h3>
                    </div>
                  </div>
                </div>
              </>
            )
          } )}
      </div>
      <div className="h-[99vh] " ></div>
    </div>
  );
};

export default Projects;
