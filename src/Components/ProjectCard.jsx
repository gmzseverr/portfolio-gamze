import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 flex gap-6 bg-light-background dark:bg-dark-background rounded-md shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={project.image} alt="" className="w-2/5" />
      <section>
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
          {project.title}
        </h3>
        <p className="text-light-text dark:text-dark-text mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-light-accent1 dark:bg-dark-accent1 text-white px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
