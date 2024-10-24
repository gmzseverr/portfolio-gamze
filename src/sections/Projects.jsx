import React from "react";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  const projectsData = [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce web application with a modern UI, user authentication, and payment integration.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      demoLink: "https://example.com/demo-ecommerce",
      codeLink: "https://github.com/username/ecommerce-project",
      image: "src/assets/image.png",
      status: "done",
    },
    {
      title: "Library Management System",
      description:
        "A Java-based system that allows users to manage book inventories, lending, and returning of books.",
      techStack: ["Java", "Spring Boot", "MySQL"],
      demoLink: "https://example.com/demo-library",
      codeLink: "https://github.com/username/library-management-system",
      image: "src/assets/image.png",
      status: "progress",
    },
  ];

  return (
    <div className="md:p-32 p-10 ">
      <h1 className="text-2xl font-bold mb-6">PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
