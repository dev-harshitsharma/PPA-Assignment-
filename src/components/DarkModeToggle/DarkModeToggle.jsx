"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="w-[42px] h-[24px] border-[1.5px] border-[#53c28b70] rounded-full flex items-center p-[2px] relative cursor-pointer"
      onClick={toggle}
    >
      <div className="flex items-center justify-between w-full cursor-pointer">
        <div>{mode === "light" ? "🔆" : "🌙"}</div>
        <div
          className={`w-[15px] h-[15px] bg-[#53c28b] rounded-full absolute transition-transform duration-300 ${
            mode === "light" ? "left-[2px]" : "left-[25px]"
          }`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
