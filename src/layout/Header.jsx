import React from "react";

const Header = ({ scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-light-background dark:bg-dark-background ">
      <section className="flex justify-between items-center p-4">
        <div className="text-2xl p-4 font-bold font-roboto text-light-text dark:text-dark-text">
          gamze
        </div>

        <nav className="flex space-x-4 font-roboto  font-semibold">
          <button
            onClick={() => scrollToSection("skills")}
            className="text-light-text dark:text-dark-text text-sm hover:font-bold hover:text-xl transition-all duration-300"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-light-text dark:text-dark-text text-sm hover:font-bold hover:text-xl transition-all duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-light-text dark:text-dark-text text-sm hover:font-bold hover:text-xl transition-all duration-300"
          >
            Contact
          </button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
