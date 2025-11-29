import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Team from "./Team";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageMobileDivRef = useRef(null)
  const firstImageMobileRef = useRef(null)
  const secondImageMobileRef = useRef(null)
  const currentIndexRef = useRef(0);
  useGSAP(()=>{
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 37%",
        end: "top -65%",
        pin:true,
        scrub:1,
        onUpdate: (e)=>{
          const progress = e.progress
          const index = Math.min(Math.floor(progress * Team.length), Team.length -1)
          imageRef.current.src = Team[index].Image
        }
      }
    })
  },{scope:imageDivRef})

  useEffect(() => {
    if (!firstImageMobileRef.current || !secondImageMobileRef.current) return;

    const intervalId = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % Team.length;
      const nextIndex = (currentIndexRef.current + 1) % Team.length;
      
      // Animate second image sliding up
      const tl = gsap.timeline();
      
      // Set next image
      secondImageMobileRef.current.src = Team[nextIndex].Image;
      
      // Animate
      tl.fromTo(
        secondImageMobileRef.current,
        { y: "100%" },
        { y: "0%", duration: 1, ease: "power2.inOut" }
      ).call(() => {
        // After animation, swap images
        firstImageMobileRef.current.src = Team[nextIndex].Image;
        gsap.set(secondImageMobileRef.current, { y: "100%" });
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="section1 md:mb-[9vw] ">
        <div ref={imageDivRef} className=" hidden md:block absolute h-[40vw] md:h-[20vw] w-[30vw] md:w-[15vw] top-96 left-[30vw] rounded-[2vw] overflow-hidden " >
          <img ref={imageRef} src="images/agence/Carl_480x640.jpg" className=" w-full h-full object-cover " />
        </div>
        <div ref={imageMobileDivRef} className=" block md:hidden absolute h-[40vw] md:h-[20vw] w-[30vw] md:w-[15vw] top-96 left-[30vw] rounded-[3vw] overflow-hidden " >
          <img ref={firstImageMobileRef} src="images/agence/Carl_480x640.jpg" className=" absolute top-0 w-full h-full object-cover" />
          <img ref={secondImageMobileRef} src="images/agence/Carl_480x640.jpg" className=" absolute top-0 w-full h-full object-cover" />
        </div>
        <div className="font-[Lausanne-300] relative text-white ">
          <div className=" mt-[55vh] " >
            <h1 className="text-[20vw] text-center leading-[20vw] uppercase ">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="ml-2 md:pl-[40%] pr-5 mt-20" >
            <p className=" text-xl md:text-4xl text-justify ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agence;
