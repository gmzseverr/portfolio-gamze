"use client"
import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <div className="">
<Hero/>
<Skills/>
<About />
<Projects/>
<Footer/>
    </div>
  );
}
