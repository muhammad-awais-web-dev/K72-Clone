import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SlidingImage = (props) => {
  const SlidingTextContainerRef = useRef(null);
  const [screenSize, setScreenSize] = useState(() => {
    return window.innerWidth >= 768 ? "Desktop" : "Mobile";
  });

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth >= 768 ? "Desktop" : "Mobile";
      if (screenSize !== newSize) {
        setScreenSize(newSize);
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  useGSAP(() => {
    if (!SlidingTextContainerRef.current) return;
    
    const toLeftElements = gsap.utils.toArray(
      SlidingTextContainerRef.current.querySelectorAll(".to-Left > div")
    );
    const toRightElements = gsap.utils.toArray(
      SlidingTextContainerRef.current.querySelectorAll(".to-Right > div")
    );
    
    gsap.to(toLeftElements, {
      xPercent: -100,
      duration: 5,
      ease: "none",
      repeat: -1,
    });
    
    gsap.fromTo(
      toRightElements,
      {
        xPercent: -100,
      },
      {
        xPercent: 0,
        duration: 5,
        ease: "none",
        repeat: -1,
      }
    );

    const img = SlidingTextContainerRef.current.querySelector("img");
    
    if (img) {
      const isMobile = window.innerWidth < 768;
      if(!isMobile){
        ScrollTrigger.create({
          trigger: SlidingTextContainerRef.current,
          start:  "top top",
          end:  "bottom top",
          pin: img,
          pinSpacing: false,
          markers: false,
        });
      }
    }
  }, [screenSize]);

  return (
    <div
      ref={SlidingTextContainerRef}
      className="h-[50vh] md:h-screen w-full flex flex-col justify-center overflow-hidden z-10 font-[Lausanne-500] relative"
    >
      <div className="to-Left text-[9vw] flex w-fit text-[#d3fd50]">
        <div className="w-screen">{props.FirstName}</div>
        <div className="w-screen">{props.FirstName}</div>
        <div className="w-screen">{props.FirstName}</div>
      </div>
      <img 
        src={props.Image} 
        alt={props.FirstName} 
        className="absolute top-0 left-[25vw] md:left-[30vw] rounded-[2vw] md:rounded-[1vw] h-[40vh] md:h-full w-[50vw] md:w-[40vw] object-cover"
      />
      <div className="to-Right text-[9vw] flex w-fit text-[#d3fd50]">
        <div className="w-screen">
          {props.LastName} <span className="text-[3vw] md:text-[2vw] text-white">{props.Position}</span>
        </div>
        <div className="w-screen">
          {props.LastName} <span className="text-[3vw] md:text-[2vw] text-white">{props.Position}</span>
        </div>
        <div className="w-screen">
          {props.LastName} <span className="text-[3vw] md:text-[2vw] text-white">{props.Position}</span>
        </div>
      </div>
    </div>
  );
};

export default SlidingImage;
