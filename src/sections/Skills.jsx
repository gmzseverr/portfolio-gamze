// Skills.js
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SkillList from "../Components/SkillList"; // Adjust the import path if needed

function Skills() {
  const skillsData = [
    { icon: faCheck, skill: "HTML" },
    { icon: faCheck, skill: "CSS" },
    { icon: faCheck, skill: "JavaScript" },
    { icon: faCheck, skill: "React.js" },
    { icon: faCheck, skill: "Git" },
    { icon: faCheck, skill: "Tailwind" },
    { icon: faCheck, skill: "Bootstrap" },
    { icon: faCheck, skill: "Java" },
    { icon: faCheck, skill: "SQL" },
    { icon: faCheck, skill: "PostgreSQL" },
  ];

  return (
    <div className="">
      <div className="md:p-32 p-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between ">
          <h1 className="text-5xl py-6 font-bold text-light-accent1 dark:text-dark-accent1 text-center md:text-left md:mr-10">
            My Skills
          </h1>
          <section className="flex-grow">
            <SkillList skills={skillsData} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Skills;
