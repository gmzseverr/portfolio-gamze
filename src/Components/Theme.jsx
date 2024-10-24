import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Theme = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={toggleDarkMode}>
      <FontAwesomeIcon
        icon={isDarkMode ? faLightbulb : faMoon}
        className="text-xl"
      />
    </div>
  );
};

export default Theme;
