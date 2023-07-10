import React, { useState } from "react";
import useTheme from "../hooks/useTheme";
import { IoIosArrowDown } from "react-icons/io";
import { BsSun, BsMoon } from "react-icons/bs";

const Theme = () => {
  const { setFont, setIsDarkTheme, isDarkTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentFont, setCurrentFont] = useState("Serif");

  const handleChangeFont = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const button = e.target as HTMLButtonElement;
    const value = button.getAttribute("value");
    const text = button.textContent;

    setFont(value as string);
    setCurrentFont(text as string);
    setDropdownOpen(false);
  };

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="flex items-center justify-center gap-8 ml-3 ">
      {/* font family dropdown */}
      <div className="relative z-50">
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-5 justify-between cursor-pointer w-32"
        >
          <span>{currentFont}</span>
          <IoIosArrowDown
            className={`w-4 transition-all duration-300 ${
              dropdownOpen ? "rotate-180" : null
            }`}
          />
        </div>

        {dropdownOpen && (
          <ul className="absolute top-full left-0 w-fit bg-backgroundPrimary p-2 shadow-md">
            <li>
              <button
                onClick={(e) => handleChangeFont(e)}
                className="font-serif outline-0 outline-none w-full text-left"
                value="serif"
              >
                Serif
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleChangeFont(e)}
                className="font-sansSerif outline-0 outline-none w-full text-left"
                value="sans-serif"
              >
                Sans-serif
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleChangeFont(e)}
                className="font-monospace outline-0 outline-none  w-full text-left"
                value="monospace"
              >
                Monospace
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* theme switch */}
      <div className="flex items-center justify-center">
        <span>
          <BsSun />
        </span>
        <div
          onClick={handleChangeTheme}
          className={`relative h-[20px] w-10  rounded-3xl mx-2 cursor-pointer ${
            isDarkTheme ? "bg-accentColor" : "bg-componentColor200"
          }`}
        >
          <div
            className={`h-[16px] w-[16px] rounded-full bg-backgroundPrimary absolute top-[2px] transition-all ${
              isDarkTheme ? "left-5" : "left-1"
            }`}
          ></div>
        </div>
        <span>
          <BsMoon />
        </span>
      </div>
    </div>
  );
};

export default Theme;
