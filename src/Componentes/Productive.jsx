import { Play } from "lucide-react";
import hero from "/assets/hero.png";
const Productive = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-11/12 mx-auto pt-6">
        <h1 className="font-inter text-7xl font-black w-3/5 mx-auto text-center mt-20">
          We Build{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center font-inter text-xl text-[#627382] mt-4 mb-10">
          At Apps Station, we craft innovative apps designed to make everyday
          life simpler, smarter, and more exciting. <br /> Our goal is to turn
          your ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center space-x-6 justify-center mb-10">
          <a href="https://play.google.com/store/games?hl=en" target="_blank" className="flex items-center space-x-1 border-2 border-gray-300 rounded-md py-2 px-6 cursor-pointer font-inter font-semibold text-xl text-[#001931]">
            <img src="/playstore.png" alt="" className="w-10 h-10"/>
            <p>Google Play</p>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" className="flex items-center space-x-1 border-2 border-gray-300 rounded-md py-2 px-6 cursor-pointer font-inter font-semibold text-xl text-[#001931]">
            <img src="/appstore.png" alt="" className="w-10 h-10"/>
            <p>App Store</p>
          </a>
        </div>
        <div>
          <img src={hero} alt="Hero" className="mx-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Productive;
