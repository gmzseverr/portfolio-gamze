import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  const projectsData = [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce web application developed using React.js and Tailwind CSS. Users can sign up, add products to their cart, create address cards, and easily complete their orders.",
      techStack: ["React", "Tailwind CSS", "Responsive", "Redux", "Axios"],
      demoLink: "https://rhea-wear.vercel.app/",
      codeLink: "https://github.com/gmzseverr/rhea-wear",
      image: "src/assets/Screenshot 2024-10-25 at 02.59.12.jpeg",
      status: "progress",
    },
    {
      title: "Library Management System",
      description:
        "A Java-based system that allows users to manage book inventories, lending, and returning of books. It supports user registration with different roles, enabling tailored functionalities based on membership status, including varying pricing for services.",
      techStack: ["Java", "Spring Boot", "PostgreSQL"],
      status: "done",
    },
  ];

  return (
    <section>
      <div className="md:px-32 py-32 px-10 flex dark:bg-dark-background ">
        <section className="flex flex-col items-center w-full">
          <h1 className="font-anton text-6xl py-6 text-light-text dark:text-dark-text text-center">
            PROJECTS
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;
