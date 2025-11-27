import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(Observer)

const Navbar = () => {
  const LinksContainerRef = useRef(null)
  const FullPageRef = useRef(null)
  const [dFactor, setDFactor] = useState(1)
  const dFactorRef = useRef(1)
  const stairsParent = useRef(null)
  const [open, setOpen] = useState(null)

  useEffect(()=>{
    dFactorRef.current = dFactor
  },[dFactor])

  useGSAP(() => {
    const linksAnimated = gsap.utils.toArray(LinksContainerRef.current.querySelectorAll('.links-animated'));
    const actualLinks = gsap.utils.toArray(LinksContainerRef.current.querySelectorAll('.actualLinks'));
    console.log(actualLinks);
    linksAnimated.forEach((link)=>{
      const linksAnimatedInner = gsap.utils.toArray(link.querySelectorAll('.links-animated-inner'));
      linksAnimatedInner.forEach((inner)=>{
        gsap.to(inner, {
          xPercent: -100,
          ease: "none",
          duration: 4,
          repeat: -1,
        })
      })
    })
    
    actualLinks.forEach(link=>{
      const linksAnimatedDiv = link.querySelector('.links-animated');
      gsap.to(linksAnimatedDiv, {
        y: '-100%',
        duration: 0,
        ease: "power2.out"
      })
      
      link.addEventListener('mouseenter', ()=>{
        gsap.fromTo(linksAnimatedDiv, {
          y: `${dFactorRef.current}00%`
        },{
          y: '0%',
          duration: 0.25,
          ease: "power2.out"
        })
      })
      
      link.addEventListener('mouseleave', ()=>{
        gsap.to(linksAnimatedDiv, {
          y: `${-dFactorRef.current}00%`,
          duration: 0.25,
          ease: "power2.out"
        })
      })
    })
  }, []);

  useGSAP(()=>{
    Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      onMove: () => {},
      onDown: () => {setDFactor(-1);console.log(-1);},
      onUp: () => { setDFactor(1); console.log(1);},
    })
  })

  useGSAP(() => {
  if(open !== null) {
    const steps = gsap.utils.toArray(stairsParent.current.querySelectorAll('.step'));
    const tl = gsap.timeline();
    
    if(open === "Full") {
      // Opening animation
      tl.set(stairsParent.current, { display: 'flex' })
        .from(steps, {
          height: 0,
          duration: 0.4,
          stagger: { amount: -0.2, from: "start" },
          ease: "power2.inOut"
        })
        .call(() => { FullPageRef.current.style.display = "flex" })
        .to(steps, {
          y: "100%",
          duration: 0.4,
          stagger: { amount: -0.2, from: "start" },
          ease: "power2.inOut"
        })
        .set(stairsParent.current, { display: 'none' });
    } 
    else if(open === "close") {
      // Closing animation
      tl.set(stairsParent.current, { display: 'flex' })
        .set(steps, { y: "0%" })
        .from(steps, {
          height: 0,
          duration: 0.4,
          stagger: { amount: -0.2, from: "start" },
          ease: "power2.inOut"
        })
        .call(() => { FullPageRef.current.style.display = "none" })
        .to(steps, {
          y: "100%",
          duration: 0.4,
          stagger: { amount: -0.2, from: "start" },
          ease: "power2.inOut"
        })
        .set(stairsParent.current, { display: 'none' });
    }
  }
}, [open]);

    const navItems = [
        {name: 'Projects', link: '/projects', subText: 'Pour tout voir', image: ['/images/Nav/PJC_SiteK72_Thumbnail_640x290.jpg','/images/Nav/WS---K72.ca---MenuThumbnail.jpg']},
        {name: 'Agence', link: '/agence', subText: 'Pour tout savoir', image: ['/images/Nav/PLP_640x280.jpg','/images/Nav/MEGGIE_640X290_2.jpg']},
        {name: 'Contact', link: '/', subText: 'Pour envoyer un fax', image:['/images/Nav/sprite.svg','/images/Nav/sprite.svg']},
        {name: 'Blogue', link: '/', subText: 'Lire les articles', image:['/images/Nav/K72_article_ChatGPT_blogue.jpg','/images/Nav/ier.com-16107673482102220.gif']},
    ]

  return (
    <nav className="navbar h-screen w-screen  relative flex flex-col justify-center items-center">
      <div 
        className="stairsParent fixed top-0 left-0 w-screen h-screen z-120 hidden pointer-events-none" 
        ref={stairsParent}
      >
        <div className="stairs w-full h-full flex">
          <div className="step bg-black w-1/5 h-full"></div>
          <div className="step bg-black w-1/5 h-full"></div>
          <div className="step bg-black w-1/5 h-full"></div>
          <div className="step bg-black w-1/5 h-full"></div>
          <div className="step bg-black w-1/5 h-full"></div>
        </div>
      </div>
      <div className="topBar">
        <div className=" cursor-pointer absolute p-5 border-2 border-white -mt-2 -ml-2 top-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              fill="#ffffff"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div className="cursor-pointer absolute top-0 right-0 bg-white w-[150px] h-[78px] flex items-center justify-center" onClick={()=> setOpen("Full")}>
          <div className='Menu-button w-full h-full flex items-center justify-center relative z-1' >
            <div className='absolute top-0 w-full bg-[#d3fd50] ' ></div>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 86.78 15.64"
            className="w-1/2 h-auto z-10"
          >
            <line 
              y1="1" 
              x2="86.78" 
              y2="1"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line 
              x1="26.53" 
              y1="14.64" 
              x2="86.78" 
              y2="14.64"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
          </div>
        </div>
      </div>
      <div className="fullPage hidden bg-black z-100 w-screen relative items-center justify-center h-screen" ref={FullPageRef}>
        <div className=" absolute p-5 border-2 border-white -mt-2 -ml-2 top-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              fill="#ffffff"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div className="Close-button absolute top-3 right-3 cursor-pointer" onClick={()=> setOpen("close")}>
          <svg
            height="6vh"
            width="6vh"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 0 L 30 30 M 30 0 L 0 30"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </div>
        <div ref={LinksContainerRef} className="font-[Lausanne-500] text-[7vw] text-left whitespace-nowrap h-[50%] w-full flex flex-col justify-center items-center">
          {navItems.map((item, index) => (
              <>
                  <Link to={item.link} key={index} className="actualLinks relative w-full h-1/4 flex flex-col justify-center items-start overflow-hidden border-y -mt-1 bg-black border-white text-white">
                      <div className='flex w-full justify-center items-center'>{item.name}</div>
                      <div className="links-animated h-full absolute top-0 flex justify-start items-center bg-[#d3fd50] text-black">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className='links-animated-inner flex gap-5 px-5 justify-start items-center'>
                              {item.image.map((img, id)=> (
                                <div className=' flex gap-5 justify-start items-center' key={id}>
                                  <span> {item.subText} </span>
                                  <div className={`${img == "/images/Nav/sprite.svg"? "w-[6vw] h-[2vw] overflow-hidden flex items-center justify-center" :"w-[16vw] h-[6vw] rounded-full overflow-hidden flex items-center justify-center" }`}>
                                    <img src={img} alt={item.subText} className={`${img == "/images/Nav/sprite.svg"? "object-contain h-[2vw] w-[2vw]" :"object-cover" }`}/>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                      </div>
                  </Link>
              </>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;