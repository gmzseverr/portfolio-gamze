import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark-accent dark:bg-light-accent py-8">
      <div className="container py-10 mx-auto text-center text-dark-background dark:text-light-background">
        <h2 className="text-3xl font-bold text-light-text dark:text-dark-text mb-4 font-rubik">
          Send Me a Message
        </h2>
        <p className="text-light-text dark:text-dark-text mb-2 font-cutiveMono">
          You can check my accounts
        </p>

        <div className="flex justify-center space-x-3">
          {/* Mailto link */}
          <a
            href="mailto:gmzsever12@gmail.com"
            className="p-2 text-2xl text-light-accent1 cursor-pointer hover:text-3xl z-10"
            title="Send Email"
          >
            <FontAwesomeIcon icon={faAt} />
          </a>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/gamzesever/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-light-accent1 cursor-pointer hover:text-3xl z-10"
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            href="https://github.com/gmzseverr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-light-accent1 cursor-pointer hover:text-3xl z-10"
            title="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
