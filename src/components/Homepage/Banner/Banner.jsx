import React from "react";
import bannerIMG from "../../../assets/banner-main.png";
import bgImg from "../../../assets/bg-shadow.png";
const Banner = () => {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl mt-6 bg-black"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative text-center space-y-4 px-4  mx-auto">
        <img src={bannerIMG} alt="" className="w-40 mx-auto" />

        <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-gray-300 text-lg">Beyond Boundaries Beyond Limits</p>

        <button className="px-6 py-2 font-bold text-black bg-yellow-400 border border-yellow-500 rounded-lg">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
