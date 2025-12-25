"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Project = {
  title: string
  description: string
  techStack: string[]
  image: string
  demoLink?: string
  codeLink?: string
  videoLink?: string
  note?: string
}

const projectsData: Project[] = [
  {
    title: "Movie Web Platform",
    description:
      "A full-stack movie platform built with Spring Boot & PostgreSQL on the backend and React on the frontend. Deployed with Docker, Render, and Neon. Includes authentication and movie data management.",
    techStack: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Render",
      "Neon",
    ],
    image: "/assets/wicked.jpeg",
    demoLink: "https://imovie-ten.vercel.app/",
    codeLink: "https://github.com/gmzseverr/movie-website",
    videoLink: "https://www.loom.com/share/ddf3039f066e4b7fa491f2b0ee28de0c",
    note: "Demo may take 1–3 minutes to wake up (Render backend).",
  },
  {
    title: "BazaarX E-commerce",
    description:
      "Modern e-commerce platform using Next.js, Spring Boot, and MongoDB. Product data sourced and cleaned from Kaggle. Focused on scalable architecture and cloud deployment.",
    techStack: [
      "Next.js",
      "Spring Boot",
      "MongoDB",
      "Docker",
      "Render",
      "Vercel",
    ],
    image: "/assets/bazaarX.jpeg",
    demoLink: "https://bazaar-x-frontend-vert.vercel.app/",
    codeLink: "https://github.com/gmzseverr/bazaarX-frontend",
  },
  {
    title: "Piri Academy Landing Page",
    description:
      "A vibrant, kid-focused landing page built with React and Tailwind CSS. The design is playful and interactive, aiming to engage young learners. It emphasizes clean responsive layouts and smooth animations to enhance user experience.",
    techStack: ["React", "Tailwind CSS", "Responsive Design", "JavaScript"],
    demoLink: "https://piriacademy.com/",
    image: "/assets/piri.jpeg",
  },
  {
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce web application developed using React.js and Tailwind CSS. Users can sign up, add products to their cart, create address cards, and easily complete their orders.",
    techStack: ["React", "Tailwind CSS", "Responsive", "Redux", "Axios"],
    demoLink: "https://rhea-wear.vercel.app/",
    codeLink: "https://github.com/gmzseverr/rhea-wear",
    image: "/assets/Screenshot 2024-10-25 at 02.59.12.jpeg",
  },
  {
    title: "Packsmile — Commercial Landing Page",
    description:
      "A fully custom-designed commercial landing page built for a real client. Designed and developed with a strong focus on conversion, performance, and responsive UX.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Custom UI",
      "Responsive Design",
      "SEO-ready",
    ],
    demoLink: "https://www.pack-smile.com",
    image: "/assets/pack.png",
  },
  {
    title: "Pomodoro App",
    description: "A pomodoro app with timer, color themes and side menu. ",
    techStack: ["React", "JavaScript", "CSS"],
    codeLink: "https://github.com/gmzseverr/pomodoro",
    demoLink: "https://focus-by.netlify.app/",
    image: "/assets/pomodoro.jpeg",
  },
  {
    title: "Photo Print Landing Page",
    description:
      "This is a clean, minimalist, and fully responsive photo printing landing page built with HTML, CSS, and JavaScript. It features a countdown timer to highlight a specific event or offer.",
    techStack: ["HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/gmzseverr/landing-print",
    demoLink: "https://gmzseverr.github.io/landing-print/",
    image: "/assets/proho-print.jpeg",
  },
 /* {
    title: "Age Calculator",
    description:
      "Inspired by a Frontend Mentor challenge, this project was built using HTML, CSS, and JavaScript. It calculates a user's age based on the input date, with a focus on functionality and responsive design.",
    techStack: ["JavaScript", "HTML", "CSS"],
    codeLink: "https://github.com/gmzseverr/age-calculator",
    demoLink: "https://gmzseverr.github.io/age-calculator/",
    image: "/assets/desktop-design.jpg",
  },*/
  {
    title: "Retro Snake Game",
    description:
      "A classic snake game with using vanilla HTML, CSS, JavaScript. This project is based on the classic snake game. The game mechanics include basic features such as controlling the snake with keys, growing longer as it eats food and ending the game when it hits. The project was created using resources on YouTube.",
    techStack: ["JavaScript", "HTML", "CSS"],
    codeLink: "https://github.com/gmzseverr/snake",
    demoLink: "https://retro-snake-blue.vercel.app/",
    image: "/assets/snake-project.jpeg",
  },
  {
    title: "Responsive Portfolio",
    description:
      "A personal portfolio website built with React.js and Tailwind CSS, featuring dark mode and language selection. It showcases my projects, skills, and contact information in a modern and responsive design.",
    techStack: ["JavaScript", "React.js", "Tailwind CSS"],
    codeLink: "https://github.com/gmzseverr/my-portfolio",
    demoLink: "https://my-portfolio-gmzseverr.vercel.app/",
    image: "/assets/Screenshot 2025-02-13 at 01.37.44.jpeg",
  },
]


export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {

        gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
              },
            }
          )
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
    id="projects"
      ref={sectionRef}
      className="bg-black text-white py-32 px-8 md:px-16"
    >
  
        {/* Label */}
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef}>
          <div className="text-[9px] tracking-[0.4em] uppercase text-neutral-600 mb-6">
            — Selected Work
          </div>
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] font-bold mb-6 tracking-tight">
            PROJECTS &<br />
            <span className="italic font-light text-neutral-500">EXPERIMENTS</span>
          </h2>
          <p className="text-[14px] text-neutral-500 max-w-2xl mb-20">
            A selection of {projectsData.length} projects spanning full-stack development,
            UI/UX experimentation, and client work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(p)}
              className="project-card group text-left"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-lg 
                border border-neutral-800 transition-all duration-300
                group-hover:border-neutral-700
                group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              <h3 className="mt-4 text-lg font-medium group-hover:text-neutral-300 transition-colors">
                {p.title}
              </h3>

              <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                {p.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="max-w-3xl w-full bg-neutral-950 border border-neutral-800 rounded-xl p-8 relative">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              {active.title}
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {active.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {active.techStack.map((t, i) => (
                <span
                  key={i}
                  className="text-[11px] px-3 py-1 rounded-full border border-neutral-700 text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {active.note && (
              <p className="text-xs text-neutral-500 italic mb-4">
                {active.note}
              </p>
            )}

            <div className="flex gap-6 text-[11px] tracking-[0.25em] uppercase">
              {active.demoLink && (
                <a
                  href={active.demoLink}
                  target="_blank"
                  className="border-b border-white pb-1"
                >
                  Live
                </a>
              )}
              {active.codeLink && (
                <a
                  href={active.codeLink}
                  target="_blank"
                  className="text-neutral-500 border-b border-neutral-600 pb-1"
                >
                  Code
                </a>
              )}
              {active.videoLink && (
                <a
                  href={active.videoLink}
                  target="_blank"
                  className="text-neutral-500 border-b border-neutral-600 pb-1"
                >
                  Video
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
