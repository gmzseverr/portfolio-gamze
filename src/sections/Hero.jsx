import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Hero() {
  return (
    <div className="md:px-32 pt-28 md:pt-0 px-5 bg-light-background dark:bg-dark-background">
      <section
        className="flex flex-col gap-4 md:flex-row md:justify-between 
        text-dark-background dark:text-light-background"
      >
        <div className="items-start  md:self-end pb-36  flex flex-col gap-2 md:w-2/6">
          <section className="flex flex-col">
            <div className="text-3xl pb-2 font-anton text-dark-background dark:text-light-background ">
              JUNIOR
            </div>
            <p className="font-anton  text-8xl font-extrabold  text-dark-background dark:text-light-background">
              SOFTWARE DEVELOPER
            </p>
          </section>
          <div className=" text-dark-background dark:text-light-background flex items-start gap-3 flex-col">
            <p className="font-cutiveMono text-sm text-left">
              ...an enthusiastic junior software developer. I’m passionate about
              continuous learning and creating innovative solutions in web
              development.
            </p>
            <section className=" text-dark-background flex flex-col items-center justify-end gap-2">
              <div className="flex gap-4 md:justify-end">
                <a
                  href="https://github.com/gmzseverr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-dark-background text-xl cursor-pointer transform transition-transform duration-300 hover:scale-150 hover:text-light-accent dark:hover:text-dark-accent"
                    aria-label="GitHub"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/gamzesever/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-xl cursor-pointer transform transition-transform duration-300 hover:scale-125 hover:text-light-accent dark:hover:text-dark-accent"
                    aria-label="LinkedIn"
                  />
                </a>
                <a href="mailto:gmzsever12@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-xl cursor-pointer transform transition-transform duration-300 hover:scale-125  hover:text-light-accent dark:hover:text-dark-accent"
                    aria-label="Email"
                  />
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-end md:w-3/6">
          <img src="../assets/IMG_0310.jpeg" alt="" className="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
