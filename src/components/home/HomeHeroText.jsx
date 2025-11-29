import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <>
      <div className="pt-7 text-[11vw] w-[78vw] md:text-[9.5vw] text-center">
        <div className="font-[Lausanne-300]  leading-[9vw] uppercase justify-center flex items-center">
          L'étincelle
        </div>
        <div className="font-[Lausanne-300]  leading-[9vw] uppercase justify-center py-[2vw] flex items-center">
          qui
          <div className=" h-[8vw] md:h-[7vw] w-[16vw] md:w-[14vw] -mt-5 rounded-full overflow-hidden">
            <Video />
          </div>{" "}
          génère
        </div>
        <div className="font-[Lausanne-300]  leading-[9vw] uppercase justify-center flex items-center">
          la créativité
        </div>
        <div className=" w-full h-20 flex md:hidden flex-row-reverse pr-5 pl-[10vw] pt-5 text-sm text-right ">
          K72 est une agence qui pense chaque action pour nourrir la marque.
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
          l’étincelle pour générer de l’émotion. Pour assurer une relation
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
          qui doit être fait.
        </div>
      </div>
    </>
  );
};

export default HomeHeroText;
