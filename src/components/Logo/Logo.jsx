import React from "react";
import logo from "/Logo.svg";

const Logo = () => {
  return (
    <div className="w-[197px] h-8">
      <img src={logo} alt="Logo" className="w-full h-full" />
    </div>
  );
};

export default Logo;
