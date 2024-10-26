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
      image: "../assets/Screenshot 2024-10-25 at 02.59.12.jpeg",
      status: "progress",
    },
    {
      title: "Library Management System",
      description:
        "A Java-based system that allows users to manage book inventories, lending, and returning of books. It supports user registration with different roles, enabling tailored functionalities based on membership status, including varying pricing for services.",
      techStack: ["Java", "Spring Boot", "PostgreSQL"],
      status: "done",
    },
    {
      title: "Retro Snake Game",
      description:
        "A classic snake game with using vanilla HTML, CSS, JavaScript.",
      techStack: ["JavaScript", "HTML", "CSS"],
      status: "started",
      codeLink: "https://github.com/gmzseverr/snake",
      image: "../assets/snake-project.jpeg",
    },
  ];

  return (
    <section>
      <div className="md:px-32 py-32 px-10 dark:bg-dark-background">
        <section className="flex flex-col items-center">
          <h1 className="font-anton text-6xl py-6 text-light-text dark:text-dark-text text-center">
            PROJECTS
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
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
