import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useTheme } from "../Components/ThemeContext";

const Header = ({ scrollToSection }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between  items-start p-4">
      <section className="flex">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl p-4 font-bold font-anton dark:text-dark-text text-light-text">
            gmz
          </h1>
          <nav className="flex items-start font-thin flex-col">
            <button
              onClick={() => scrollToSection("aboutMe")}
              className="text-light-text dark:text-dark-text text-sm hover:font-bold hover:text-xl transition-all duration-300"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-light-text dark:text-dark-text text-sm hover:font-bold hover:text-xl transition-all duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-light-text dark:text-dark-text text-sm hover:font-bold hover:text-xl transition-all duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-light-text dark:text-dark-text text-sm hover:font-bold hover:text-xl transition-all duration-300"
            >
              Contact
            </button>
          </nav>
        </div>
      </section>

      <div className="pr-4  pt-2">
        <button onClick={toggleTheme} className="text-3xl cursor-pointer">
          {isDarkMode ? (
            <FontAwesomeIcon icon={faToggleOn} className="text-dark-text" />
          ) : (
            <FontAwesomeIcon icon={faToggleOff} className="text-light-text" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
