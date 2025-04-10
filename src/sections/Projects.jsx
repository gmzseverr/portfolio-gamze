import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  const projectsData = [
    {
      title: "Movie Web Page",
      description:
        "This is a movie listing web app that I built as a personal project using React for the frontend and Spring Boot with PostgreSQL for the backend. The backend handles the movie data and serves it through an API, while the frontend, built with React, uses tailwinCSS for styling and is fully responsive. The project is still a work in progress, and although it’s not yet deployed, I’m excited to continue improving it, adding new features, and preparing it for launch soon.",
      techStack: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "CSS",
        "Responsive Design",
        "Axios",
        "Redux",
      ],
      status: "in progress",
      codeLink: "https://github.com/gmzseverr/movie-data",
      demoLink:
        "https://www.loom.com/share/ddf3039f066e4b7fa491f2b0ee28de0c?sid=6bcfb291-c560-4d4a-9d50-25b7b89f28c6",

      image: "../assets/wicked.jpeg",
    },
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
      title: "Age Calculator",
      description:
        "Inspired by a Frontend Mentor challenge, this project was built using HTML, CSS, and JavaScript. It calculates a user's age based on the input date, with a focus on functionality and responsive design.",
      techStack: ["JavaScript", "HTML", "CSS"],
      status: "done",
      codeLink: "https://github.com/gmzseverr/age-calculator",
      demoLink: "https://gmzseverr.github.io/age-calculator/",
      image: "../assets/desktop-design.jpg",
    },

    {
      title: "Retro Snake Game",
      description:
        "A classic snake game with using vanilla HTML, CSS, JavaScript.This project is based on the classic snake game.  The game mechanics include basic features such as controlling the snake with keys, growing longer as it eats food and ending the game when it hits. The project was created using resources on YouTube.",
      techStack: ["JavaScript", "HTML", "CSS"],
      status: "done",
      codeLink: "https://github.com/gmzseverr/snake",
      demoLink: "https://retro-snake-blue.vercel.app/",
      image: "../assets/snake-project.jpeg",
    },
    {
      title: "Responsive Portfolio",
      description:
        "A personal portfolio website built with React.js and Tailwind CSS, featuring dark mode and language selection. It showcases my projects, skills, and contact information in a modern and responsive design.",
      techStack: ["JavaScript", "React.js", "Tailwind CSS"],
      status: "done",
      codeLink: "https://github.com/gmzseverr/my-portfolio",
      demoLink: "https://my-portfolio-gmzseverr.vercel.app/",
      image: "../assets/Screenshot 2025-02-13 at 01.37.44.jpeg",
    },
    {
      title: "Library Management System",
      description:
        "A Java-based system that allows users to manage book inventories, lending, and returning of books. It supports user registration with different roles, enabling tailored functionalities based on membership status, including varying pricing for services.",
      techStack: ["Java"],
      status: "done",
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
