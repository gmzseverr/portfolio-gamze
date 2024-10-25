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
    <div className="p-4 border-4 rounded-lg  border-black dark:bg-dark-accent2 shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="flex gap-4 justify-end">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-accent1 dark:text-dark-accent1 text-2xl hover:text-3xl"
        >
          <FontAwesomeIcon icon={faGlobe} />
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-accent1 dark:text-dark-accent1 text-2xl hover:text-3xl"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <div className="flex gap-6 flex-col items-center">
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
          {project.title}
        </h3>
        <img
          src={project.image}
          className="w-2/3 object-left-top object-contain"
        />
        <section className="px-4">
          <p className="text-light-text dark:text-dark-text mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="  dark:text-white px-2 py-1 border-2 border-black rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <div
            className={`rounded-full w-max flex justify-self-end  ${getStatusColor(
              project.status
            )}`}
          >
            <p className=" text-light-background  dark:text-dark-background text-xs font-rubik py-1 px-2 ">
              {project.status === "done" && "Done"}
              {project.status === "progress" && "In Progress"}
              {project.status === "started" && "Started"}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
