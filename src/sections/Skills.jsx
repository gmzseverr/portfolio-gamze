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
    <div className="md:px-32 bg-light-background dark:bg-dark-background py-32 px-10 md:py-22 ">
      <div className=" flex flex-col justify-items-center text-light-text dark:text-dark-text ">
        <h1 className="font-anton text-6xl py-6  text-light-text dark:text-dark-text text-center pb-10">
          MY SKILLS
        </h1>
        <div className="flex flex-col md:flex-row items-center md:justify-between ">
          <section className="flex-grow ">
            <SkillList skills={skillsData} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Skills;
