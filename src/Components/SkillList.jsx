import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillList = ({ skills }) => {
  return (
    <div className="px-10 grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 font-roboto font-semibold text-xl items-center">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="flex items-center pb-3 text-light-text dark:text-dark-text"
        >
          <FontAwesomeIcon
            icon={skill.icon}
            className="pr-1 text-light-accent1 dark:text-dark-accent1 "
          />
          <p>{skill.skill}</p>
        </span>
      ))}
    </div>
  );
};

export default SkillList;
