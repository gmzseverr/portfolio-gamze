import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React from "react";

import { useTheme } from "../Components/ThemeContext";

function Hero() {
  const { isDarkMode } = useTheme();

  return (
    <div className="md:px-32 py-32 px-10">
      <section
        className={`flex flex-col gap-4 md:flex-row md:justify-between 
        ${isDarkMode ? "text-white" : "text-gray-800 "}`}
      >
        <div className="items-start md:self-end pb-36 flex flex-col gap-2 md:w-2/6 ">
          <section>
            <div className="text-3xl pb-2 font-anton bg-gradient-to-r from-colorful to-pink-500 bg-clip-text text-transparent dark:from-white dark:to-lightBeige">
              JUNIOR
            </div>
            <p className="font-anton text-8xl font-extrabold bg-gradient-to-r from-colorful to-pink-500 bg-clip-text text-transparent dark:from-white dark:to-lightBeige">
              SOFTWARE DEVELOPER
            </p>
          </section>
          <p className="font-cutiveMono text-sm text-left ">
            ...an enthusiastic junior software developer. I’m passionate about
            continuous learning and creating innovative solutions in web
            development.
          </p>
          <section className="flex flex-col items-center justify-end gap-2">
            <div className="flex gap-4 md:justify-end ">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`text-xl cursor-pointer transform transition-transform duration-300 hover:scale-150 
                ${isDarkMode ? "hover:text-cyan" : "hover:text-gray-500"}`}
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
                ${isDarkMode ? "hover:text-cyan" : "hover:text-gray-600"}`}
                  aria-label="LinkedIn"
                />
              </a>
              <a href="mailto:your-email@example.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={`text-xl cursor-pointer transform transition-transform duration-300 hover:scale-125 
                ${isDarkMode ? "hover:text-cyan" : "hover:text-gray-600"}`}
                  aria-label="Email"
                />
              </a>
            </div>
          </section>
        </div>

        <div className="flex flex-col-reverse justify-end md:w-3/6 ">
          <img
            src="src/assets/imageedit_1_3247719324.png"
            alt=""
            className=""
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
