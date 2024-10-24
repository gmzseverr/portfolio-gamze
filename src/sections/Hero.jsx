import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";

import { useTheme } from "../ThemeContext";
import Theme from "../Components/Theme";

function Hero() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="md:p-32 py-32">
      <section
        className={`flex flex-col-reverse  items-center gap-4 md:flex-row md:justify-between 
        ${isDarkMode ? "text-white" : "text-gray-800 "}`}
      >
        <div className="items-center flex flex-col gap-2 w-1/2">
          <div className="text-3xl pb-2 font-rubik font-extrabold">
            GAMZE SEVER
          </div>
          <p className="font-roboto">SOFTWARE DEVELOPER</p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={`text-xl cursor-pointer transform transition-transform duration-300 hover:scale-125 
                ${
                  isDarkMode
                    ? "hover:text-light-accent1"
                    : "hover:text-gray-600"
                }`}
                aria-label="GitHub"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={`text-xl cursor-pointer transform transition-transform duration-300 hover:scale-125 
                ${
                  isDarkMode
                    ? "hover:text-light-accent1"
                    : "hover:text-gray-600"
                }`}
                aria-label="LinkedIn"
              />
            </a>
            <a href="mailto:your-email@example.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`text-xl cursor-pointer transform transition-transform duration-300 hover:scale-125 
                ${
                  isDarkMode
                    ? "hover:text-light-accent1"
                    : "hover:text-gray-600"
                }`}
                aria-label="Email"
              />
            </a>
          </div>
          <p className="font-rubik text-center">
            ... an enthusiastic junior software developer. I’m passionate about
            continuous learning and creating innovative solutions in web
            development.
          </p>
          <a href="/path-to-your-resume">
            <button
              className={`cursor-pointer rounded-full py-2 px-4 
            transition-transform transform bg-light-accent1 hover:bg-light-accent2 
            dark:bg-dark-accent1 dark:hover:bg-dark-accent2 text-white`}
            >
              Resume
            </button>
          </a>
        </div>
        <div className="flex flex-col-reverse ">
          <img src="src/assets/image.png" alt="" className="w-60 h-58 pb-5" />
          <Theme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </section>
    </div>
  );
}

export default Hero;
