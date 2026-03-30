import React from "react";
import coinImg from "../../assets/DoubleDollar.png";
import logoImg from "../../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <img src={logoImg} alt="" className="h-12" />
      </div>
      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold text-xl">
          {coin} coins
          <img src={coinImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
