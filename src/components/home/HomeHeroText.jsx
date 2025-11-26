import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <>
      <div className="pt-7 text-center">
        <div className="font-[Lausanne-300] text-[9.5vw] leading-[9vw] uppercase justify-center flex items-center" >L'étincelle</div>
        <div className="font-[Lausanne-300] text-[9.5vw] leading-[9vw] uppercase justify-center flex items-center" >qui 
          <div className="h-[7vw] w-[14vw] -mt-5 rounded-full overflow-hidden">
            <Video/>
          </div> génère</div>
        <div className="font-[Lausanne-300] text-[9.5vw] leading-[9vw] uppercase justify-center flex items-center" >la créativité</div>
      </div>
    </>
  );
};

export default HomeHeroText;
