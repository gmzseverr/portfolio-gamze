import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  const projectsData = [
    {
      title: "Movie Web Page",
      description:
        "This is a full-stack movie website built with a Spring Boot and PostgreSQL backend, and a React frontend using Tailwind CSS. It's deployed with Render (for the backend), Neon (for the database), and Docker for containerization. The project includes user management and movie data handling, and is actively being improved. It significantly boosted my skills across frontend, backend, and cloud deployment. PS: The demo might take 1-3 minutes to load initially because the backend (on Render) needs to wake up.",
      techStack: [
        "React",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Tailwind CSS",
        "Responsive",
        "Axios",
        "Redux",
        "Render",
        "Neon",
        "Docker",
      ],
      note: "PS: The demo might take 1-3 minutes to load initially because the backend (on Render) needs to wake up.",
      status: "progress",
      codeLink: "https://github.com/gmzseverr/movie-website",
      demoLink: "https://imovie-ten.vercel.app/",
      videoLink:
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
      status: "done",
    },
    {
      title: "Roamla: AI-Powered Travel Planner",
      description:
        "Roamla is a modern, minimalist, and fully responsive AI-powered travel planning application that enables users to create personalized travel itineraries. Users can input preferences such as destination, number of days, budget, and travel companions to receive tailored hotel recommendations and detailed daily trip plans. The application stands out with its intuitive design, seamless user experience.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Google Generative AI (Gemini API)",
        "Google Places API",
      ],

      codeLink: "https://github.com/gmzseverr/roamla",
      demoLink: "https://roamla.vercel.app/",
      image: "../assets/roamla.jpeg",
      status: "started",
    },
    {
      title: "Pomodoro App",
      description: "A pomodoro app with timer, color themes and side menu. ",
      techStack: ["React", "JavaScript", "CSS"],
      status: "done",
      codeLink: "https://github.com/gmzseverr/pomodoro",
      demoLink: "https://focus-by.netlify.app/",
      image: "../assets/pomodoro.jpeg",
    },
    {
      title: "Photo Print Landing Page",
      description:
        "This is a clean, minimalist, and fully responsive photo printing landing page built with HTML, CSS, and JavaScript. It features a countdown timer to highlight a specific event or offer.",
      techStack: ["HTML", "CSS", "JavaScript"],
      status: "done",
      codeLink: "https://github.com/gmzseverr/landing-print",
      demoLink: "https://gmzseverr.github.io/landing-print/",
      image: "../assets/proho-print.jpeg",
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
