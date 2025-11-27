import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Stairs from "./components/Stairs";
import { stairsIn, stairsOut } from "./utils/stairsAnimation";
import Navbar from "./components/Nav/Navbar";

const App = () => {
  const stairsParent = useRef(null);
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setTransitionStage("fadeIn");
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  useGSAP(() => {
    if (transitionStage === "fadeOut") {
      stairsIn(stairsParent.current, () => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      });
    } else if (transitionStage === "fadeIn") {
      stairsOut(stairsParent.current);
    }
  }, [transitionStage]);

  return (
    <>
      <Stairs ref={stairsParent} />
      <div className=" w-screen h-fit fixed top-0 z-50 ">
        <Navbar displayLocation={displayLocation} />
      </div>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </>
  );
};

export default App;
