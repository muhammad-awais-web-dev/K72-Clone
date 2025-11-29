import React from "react";
import { Link } from "react-router-dom";

const BottomContact = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-between bg-black">
      <div className=" h-[80vw] w-full flex flex-col md:flex-row justify-between px-3 ">
        <div className="h-full w-full md:w-fit text-[Lausanne-300] text-[8vw] md:text-[4.5vw] leading-[8vw] md:leading-[4.5vw] flex gap-[2vw] md:gap-[.5vw] ">
          <div className=" border-white hover:border-[#d3fd50] h-fit hover:text-[#d3fd50] border-2 w-fit pt-[.4vw] px-[2.25vw] rounded-full transition-all duration-300 cursor-pointer ">
            FB
          </div>
          <div className=" border-white hover:border-[#d3fd50] h-fit hover:text-[#d3fd50] border-2 w-fit pt-[.4vw] px-[2.25vw] rounded-full transition-all duration-300 cursor-pointer ">
            IG
          </div>
          <div className=" border-white hover:border-[#d3fd50] h-fit hover:text-[#d3fd50] border-2 w-fit pt-[.4vw] px-[2.25vw] rounded-full transition-all duration-300 cursor-pointer ">
            IN
          </div>
          <div className=" border-white hover:border-[#d3fd50] h-fit hover:text-[#d3fd50] border-2 w-fit pt-[.4vw] px-[2.25vw] rounded-full transition-all duration-300 cursor-pointer ">
            BE
          </div>
        </div>
        <div className="h-full w-full md:w-fit text-[Lausanne-300] text-[14vw] md:text-[4.5vw] leading-[14vw] md:leading-[4.5vw] flex gap-[2vw] flex-col-reverse md:flex-col items-center md:gap-[.5vw] ">
          <div className=" group border-white hover:border-[#d3fd50] h-fit flex items-center justify-center hover:text-[#d3fd50] border-2 w-fit py-[.4vw] px-[2.25vw] rounded-full transition-all duration-300 cursor-pointer ">
            <span className=" -mb-[.7vw] ">CONTACT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93.46 107.23"
              className=" group-hover:fill-[#d3fd50] transition-colors duration-300 fill-white w-[10vw] md:w-[3vw] h-[10vw] md:h-[3vw] "
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M93,21.46v32.6a3.31,3.31,0,0,1-.81,2.16L59,94.37,49.21,105.6a3.3,3.3,0,0,1-5,0L34.49,94.37,1.31,56.22A3.31,3.31,0,0,1,.5,54.06V21.45a3.28,3.28,0,0,1,.9-2.26L18.2,1.52a3.29,3.29,0,0,1,4.76,0L44.35,24a3.29,3.29,0,0,0,4.76,0L70.49,1.52a3.29,3.29,0,0,1,4.76,0L92.06,19.2A3.28,3.28,0,0,1,93,21.46Z" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className=" h-[5vw] text-sm w-full flex justify-between">
        <div className="h-5 w-5 "></div>
        <div className="h-5 w-fit flex gap-8 ">
          <div className=" hover:text-[#d3fd50] cursor-pointer w-fit h-fit " >POLITIQUE DE CONFIDENTIALITÉ</div>
          <div className=" hover:text-[#d3fd50] cursor-pointer w-fit h-fit " >AVIS DE</div>
          <div className=" hover:text-[#d3fd50] cursor-pointer w-fit h-fit " >RAPPORT ÉTHIQUE</div>
          <div className=" hover:text-[#d3fd50] cursor-pointer w-fit h-fit " >OPTIONS DE CONSENTEMENT</div>
        </div>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="h-fit hover:text-[#d3fd50] cursor-pointer transition-colors duration-300 w-fit text-[lausanne-500]  text-2xl ">RETOUR EN HAUT</div>
      </div>
    </div>
  );
};

export default BottomContact;
