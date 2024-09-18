import React, { useState } from "react";
import { MdWhatsapp } from "react-icons/md";
import { MdDarkMode, MdLightMode } from "react-icons/md"; // Dark/Light mode icons

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkHandler = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkmode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("darkmode");
    }
  };
  return (
    <div className="">
      <header className="h-10 fixed w-full bg-slate-900 flex justify-between px-3  items-center">
        {/* whatsApp Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <span>
            <MdWhatsapp size={24} className="text-white" />
          </span>
          <span className="text-gray-100">WhatsApp</span>
        </div>
        {/* DarkMode Button */}
        <div>
          <button
            onClick={darkHandler}
            className="p-1 dark:bg-gray-100 bg-slate-950 rounded-full dark:text-slate-950 text-gray-100 "
          >
            {darkMode ? (
              <MdLightMode className="text-xl" />
            ) : (
              <MdDarkMode className="text-xl" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
