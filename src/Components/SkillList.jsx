import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillList = ({ skills }) => {
  return (
    <div className="md:pl-28 justify-items-start grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 font-roboto font-semibold text-xl ">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="flex hover:text-2xl  animate-pulse items-center pb-3 text-light-text dark:text-dark-text"
        >
          <FontAwesomeIcon
            icon={skill.icon}
            className="pr-1 font-ruboto text-light-accent1 dark:text-dark-accent1 "
          />
          <p>{skill.skill}</p>
        </span>
      ))}
    </div>
  );
};

export default SkillList;
