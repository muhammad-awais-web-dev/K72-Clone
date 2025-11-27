import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className=" text-[Lausanne-300] flex items-center justify-center gap-2 ">
      <Link
        to="/projects"
        className="text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-10 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] hover:transition-all hover:duration-300"
      >
        Projects
      </Link>
      <Link
        to="/agence"
        className="text-[6.5vw] leading-[6vw] border-5 border-white rounded-full px-10 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] hover:transition-all hover:duration-300 "
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
