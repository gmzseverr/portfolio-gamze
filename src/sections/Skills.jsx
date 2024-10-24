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
    <div className="bg-dark-accent1 ">
      <div className="md:p-32 p-10 ">
        <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg shadow-md">
          <h1 className="text-4xl py-6  font-bold text-light-accent1 dark:text-dark-accent1 text-center ">
            SKILLS
          </h1>
          <section>
            <SkillList skills={skillsData} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Skills;
