import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div className="text-6xl text-white overflow-hidden">
      <div className="h-screen w-screen fixed top-0 left-0 -z-10">
        <Video />
      </div>
      <div className="relative h-screen w-screen flex flex-col justify-between items-center pt-10 pb-10">
        <div className=" block md:hidden "></div>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
