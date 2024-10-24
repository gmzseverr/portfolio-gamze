import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4">
          Send Me a Message
        </h2>
        <p className="text-light-text dark:text-dark-text mb-2">
          You can check my accounts
        </p>

        <div className="flex justify-center ">
          <a href="mailto:gmzsever12@gmail.com">
            <FontAwesomeIcon
              icon={faAt}
              className="p-2 text-xl text-light-accent1 hover:text-2xl"
            />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="p-2 text-xl text-light-accent1 hover:text-2xl"
            />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="p-2 text-xl text-light-accent1 hover:text-2xl"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
