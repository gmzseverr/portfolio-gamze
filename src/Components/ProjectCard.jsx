import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "done":
        return "bg-green-500";
      case "progress":
        return "bg-yellow-500";
      case "started":
        return "bg-blue-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <section className="flex flex-col">
      <div className="p-4 border-4 rounded-lg bg-light border-light-text dark:bg-dark-text bg-light-text shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="flex gap-4 justify-end dark:text-dark-text text-light-background">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-dark-background text-light-background text-xl cursor-pointer transform transition-transform duration-300 hover:scale-150 hover:text-light-accent dark:hover:text-dark-accent"
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          )}

          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-dark-background text-light-background text-xl cursor-pointer transform transition-transform duration-300 hover:scale-150 hover:text-light-accent dark:hover:text-dark-accent"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </div>

        <div className="flex gap-6 flex-col items-center">
          <h3 className="text-xl font-bold cursor-pointer dark:text-light-text text-dark-text mb-2">
            {project.title}
          </h3>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-2/3 object-left-top object-contain"
            />
          )}
          <section className="px-4">
            <p className="dark:text-light-text text-dark-text mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-light-text dark:text-dark-text bg-dark-text dark:bg-light-text hover:bg-dark-accent hover:dark:bg-light-accent rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div
              className={`rounded-full w-max flex justify-self-end ${getStatusColor(
                project.status
              )}`}
            >
              <p className="text-light-background dark:text-dark-background text-xs font-rubik py-1 px-2">
                {project.status === "done" && "Done"}
                {project.status === "progress" && "In Progress"}
                {project.status === "started" && "Started"}
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
