import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Agence from "./pages/Agence"
import Projects from "./pages/Projects"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import Navbar from "./components/Nav/Navbar"


const App = () => {
  const stairsParent = useRef(null)
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")
  const [isFirstLoad, setIsFirstLoad] = useState(true)

useEffect(() => {
  if (isFirstLoad) {
    setTransitionStage("fadeIn")
    setIsFirstLoad(false)
  }
}, [isFirstLoad])

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut")
    }
  }, [location, displayLocation])

  useGSAP(() => {
    const steps = gsap.utils.toArray(stairsParent.current.querySelectorAll('.step'))
    
    if (transitionStage === "fadeOut") {
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayLocation(location)
          setTransitionStage("fadeIn")
        }
      })

      // Animate stairs in (covering the page)
      tl.set(stairsParent.current, {
        display: 'flex',
      })
      .from(steps, {
        height: 0,
        duration: 0.4,
        stagger: {
          amount: -0.2,
          from: "start"
        },
        ease: "power2.inOut"
      })
    } else if (transitionStage === "fadeIn") {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(stairsParent.current, { display: 'none' })
          gsap.set(steps, { height: "100%", y: 0 })
        }
      })

      // Animate stairs out (revealing new page)
      tl.to(steps, {
        y: "100%",
        duration: 0.4,
        stagger: {
          amount: -0.2,
          from: "start"
        },
        ease: "power2.inOut"
      })
    }
  }, [transitionStage])


  return (
    <>
      <div 
        className="stairsParent fixed top-0 left-0 w-screen h-screen z-50 hidden pointer-events-none" 
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
      <Routes location={displayLocation}>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </>
  )
}

export default App