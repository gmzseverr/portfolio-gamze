import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Header from "./layout/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { useRef } from "react";
import Footer from "./layout/Footer";
import "animate.css";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <ThemeProvider>
        <Header scrollToSection={scrollToSection} />
        <Hero />
        <div className="container mx-auto p-4">
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
