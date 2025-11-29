import React, { useRef, useCallback } from "react";
import Team from "./Team";
import gsap from "gsap";

const TeamMemberDetails = () => {
      const TeamMemberDivRef = useRef(null)
  const imagesRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleHover = useCallback((member) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const images = imagesRef.current.querySelectorAll("img");
      const currentImage0 = images[0].alt;
      const currentImage1 = images[1].alt;
      const memberFullName = member.FirstName + member.LastName;
      
      if (currentImage0 === memberFullName || currentImage1 === memberFullName) return;
      
      console.log(member);
      const imageTimeline = gsap.timeline();
      imageTimeline.call(()=>{images[1].src=member.Image; images[1].alt = memberFullName})
      imageTimeline.fromTo(images[1],{
        xPercent: -100,
      },{
        xPercent: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      imageTimeline.call(()=>{images[0].src=member.Image; images[0].alt = memberFullName})
    }, 150);
  }, []);


  return (
    <>
      <div ref={TeamMemberDivRef} className="group/2 font-[lausanne-500] h-fit text-white bg-black relative z-50" >  
        <div className="fixed top-120 left-60 lg:left-120 z-50 md:h-80 lg:h-120 w-58 lg:w-80 hidden md:hidden md:group-hover/2:block " >
          <div ref={imagesRef} className="h-full  overflow-hidden rounded-md w-full relative" >
            <img src={Team[0].Image} alt={Team[0].FirstName + Team[0].LastName } className=" absolute top-0 h-full w-full object-cover" />
            <img src={Team[1].Image} alt={Team[1].FirstName + Team[1].LastName } className=" absolute top-0 h-full w-full object-cover" />
          </div>
        </div>
        {Team.map((member)=>{
          return(
            <>
              <div onMouseEnter={()=>handleHover(member)} className="group cursor-pointer flex flex-col md:flex-row justify-between h-fit hover:text-black relative border-y border-white" >
                <div className=" bg-[#d3fd50] w-full h-0 transition-all duration-300 group-hover:h-full absolute top-0 left-0 z-0 " ></div>
                <span className=" self-start text-[1.25rem] z-10 transition-colors duration-300 " > {member.Position} </span>
                <span className=" self-end md:self-center text-[3rem] text-right z-10 transition-colors duration-300 " > {member.FirstName} {member.LastName} </span>
              </div>
            </>
          )
        })}
      </div>
      <div className="h-[40vh] bg-black relative z-10"></div>
    </>
  )
}

export default TeamMemberDetails
