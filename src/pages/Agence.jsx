import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArrray = [
    "images/agence/CAMILLE_480X640_2.jpg",
    "images/agence/Carl_480x640.jpg",
    "images/agence/ChantalG_480x640.jpg",
    "images/agence/HugoJoseph_480x640.jpg",
    "images/agence/joel_480X640_3.jpg",
    "images/agence/Lawrence_480x640.jpg",
    "images/agence/MEGGIE_480X640_2.jpg",
    "images/agence/Michele_480X640.jpg",
    "images/agence/Olivier_480x640.jpg",
    "images/agence/SebR_640X960.jpg",
    "images/agence/SophieA_480x640.jpg"
  ]

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
          const index = Math.min(Math.floor(progress * imageArrray.length), imageArrray.length -1)
          imageRef.current.src = imageArrray[index]
        }
      }
    })
  },{scope:imageDivRef})

  return (
    <>
      <div className="section1">
        <div ref={imageDivRef} className=" absolute h-[20vw] w-[15vw] top-96 left-[30vw] rounded-4xl overflow-hidden " >
          <img ref={imageRef} src="images/agence/Carl_480x640.jpg" className=" w-full h-full object-cover " />
        </div>
        <div className="font-[Lausanne-300] relative text-white ">
          <div className=" mt-[55vh] " >
            <h1 className="text-[20vw] text-center leading-[20vw] uppercase ">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className=" pl-[45%] pr-1 mt-20" >
            <p className=" text-5xl ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen w-full">
      </div>
    </>
  );
};

export default Agence;
