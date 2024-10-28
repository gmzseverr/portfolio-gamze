import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useTheme } from "../Components/ThemeContext";

const Header = ({ scrollToSection }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed bottom-0 md:bg-transparent md:dark:bg-transparent bg-light-background dark:bg-dark-background md:top-0 left-0 right-0 flex md:justify-between items-center justify-around md:items-start py-0 px-4 md:p-4">
      <section className="flex">
        <div className="flex md:flex-col items-center">
          <h1
            onClick={() => scrollToSection("hero")}
            className="text-3xl p-4 font-bold font-anton cursor-pointer dark:text-dark-text text-light-text"
          >
            gmz
          </h1>
          <nav className="md:gap-0 gap-3 text-xs  flex md:items-start font-thin md:flex-col">
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
