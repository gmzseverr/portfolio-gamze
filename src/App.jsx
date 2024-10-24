import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <ThemeProvider>
      <Hero />
      <Skills />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
