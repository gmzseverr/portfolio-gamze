import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Theme from "../Components/Theme";

const Header = ({ scrollToSection, isDarkMode, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-offWhite dark:bg-darkBlue ">
      <section className="flex justify-between items-center p-4">
        <div className="text-2xl p-4 font-bold font-anton dark:text-lightBeige">
          gamze
        </div>

        <nav className="flex space-x-4 font-thin">
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
      </section>
    </header>
  );
};

export default Header;
