import React from "react";

function AboutMe() {
  return (
    <div className="md:px-32 py-32 px-10 md:py-22 flex items-center justify-center dark:bg-dark-background">
      <div className="flex dark:text-dark-text text-light-text flex-col md:flex-row items-start px-10">
        <div className="">
          <h2 className="font-anton md:px-5 text-2xl">HI I'M GAMZE</h2>
          <div className="font-cutiveMono">
            <p className="md:px-5 pb-5 pt-5">
              My journey into tech began after exploring different educational
              paths, but I soon found my true passion in{" "}
              <span className="font-bold">software development</span>. Since
              then, I’ve focused on growing as a developer with a strong
              interest in <span className="font-bold">frontend</span>.
            </p>

            <p className="md:px-5 pb-5">
              With over{" "}
              <span className="font-bold">1.5 years of experience</span>, I’ve
              built full-stack projects, but frontend is where I thrive —
              blending creativity and code to craft clean, responsive interfaces
              using <span className="font-bold">React</span> and{" "}
              <span className="font-bold">Next.js</span>.
            </p>

            <p className="md:px-5 pb-5">
              On the backend, I work with{" "}
              <span className="font-bold">Java Spring Boot</span> and databases
              like <span className="font-bold">PostgreSQL</span> and{" "}
              <span className="font-bold">MongoDB</span> to create scalable
              systems.
            </p>

            <p className="md:px-5 pb-5">
              I’m a naturally curious person and I genuinely enjoy learning. I
              continuously explore{" "}
              <span className="font-bold">new technologies</span> and push
              myself to improve. Whether working independently or as part of a
              team, I value <span className="font-bold">clean code</span>,{" "}
              <span className="font-bold">thoughtful design</span>, and{" "}
              <span className="font-bold">clear communication</span>.
            </p>

            <p className="md:px-5">
              I’m excited about where this path is taking me and look forward to
              contributing to{" "}
              <span className="font-bold">meaningful projects</span> that
              combine <span className="font-bold">good design</span>,{" "}
              <span className="font-bold">functionality</span>, and{" "}
              <span className="font-bold">purpose</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
