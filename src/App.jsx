import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useTheme } from "./Components/ThemeContext";
import Header from "./layout/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { useRef } from "react";
import Footer from "./layout/Footer";
import "animate.css";
import AboutMe from "./sections/AboutMe";

function App() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "hero") {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "aboutMe") {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <ThemeProvider>
        <Header scrollToSection={scrollToSection} />
        <section ref={heroRef}>
          <Hero />
        </section>

        <section ref={aboutMeRef}>
          <AboutMe />
        </section>
        <div>
          <section ref={skillsRef}>
            <Skills />
          </section>
          <section ref={projectsRef}>
            <Projects />
          </section>
          <section ref={contactRef}>
            <Footer />
          </section>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
