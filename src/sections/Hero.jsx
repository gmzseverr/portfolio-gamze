import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import Theme from "../Theme";
import { useTheme } from "../ThemeContext";

function Hero() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="md:p-32 p-10">
      <section
        className={`flex flex-col items-center gap-4 md:flex-row md:justify-between 
        ${isDarkMode ? "text-white" : "text-gray-800 "}`}
      >
        <div className="flex">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl text-white mr-4">
            ?
          </div>
          <Theme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="items-center flex flex-col gap-2">
          <div className="text-3xl pb-2 font-rubik font-extrabold">
            GAMZE SEVER
          </div>
          <p>SOFTWARE DEVELOPER</p>
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
      </section>
    </div>
  );
}

export default Hero;
