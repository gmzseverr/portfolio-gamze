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
  image: string | string[]
  demoLink?: string
  codeLink?: string
  videoLink?: string
  note?: string
}

const projectsData: Project[] = [
  {
    title: "OBSCURA Photo Booth",
    description:
      "Vintage photo booth web app capturing 4-frame B&W strips with retro film effects. Real-time camera filters, GSAP animations, and canvas-based image processing. Features planned: Web Share API, multiple filters, and photo gallery.",
    techStack: [
      "Next.js 15",
      "TypeScript", 
      "Tailwind CSS",
      "GSAP",
      "HTML5 Canvas",
    ],
    image: "/assets/obscura.png",
    demoLink: "https://obscura-gmz.vercel.app",
    codeLink: "https://github.com/gmzseverr/obscura",
  },
  {
    title: "EverFrame: Personal Event Photo Booth",
    description:
      "A custom digital memory application designed specifically for a close friend's engagement ceremony. I developed an 'event-tech' solution that allowed guests to capture and download high-resolution Polaroid-style photos directly from their smartphones, with a design language inspired by the couple's physical invitation typography and color palette.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 Canvas API",
    ],
    image: ["/assets/everframe-desktop.png", "/assets/everframe-2.png", "/assets/everframe-3.png"], 
    demoLink: "https://cansutufan.vercel.app/",
    note: "Features a custom-built image processing engine optimized for high-DPI mobile displays and print-ready digital outputs.",
  },
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

]






export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // GSAP Animations
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

  // Auto Slider - 3.5 saniye
  useEffect(() => {
    if (active && Array.isArray(active.image) && active.image.length > 1) {
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % active.image.length)
      }, 3500)

      return () => {
        if (slideIntervalRef.current) {
          clearInterval(slideIntervalRef.current)
        }
      }
    }
  }, [active])

  // Reset slide on modal open
  useEffect(() => {
    if (active) {
      setCurrentSlide(0)
    }
  }, [active])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-black text-white py-32 px-8 md:px-16"
    >
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
                  src={Array.isArray(p.image) ? p.image[0] : p.image}
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
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center px-6"
          onClick={() => setActive(null)}
        >
          <div 
            className="max-w-4xl w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors z-10 text-2xl leading-none"
            >
              ×
            </button>

            <h3 className="text-3xl font-bold mb-6 pr-8">
              {active.title}
            </h3>

            {/* Slider - Otomatik geçiş */}
            <div className="relative aspect-video mb-8 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
              {Array.isArray(active.image) ? (
                <>
                  {/* Slides with smooth fade */}
                  <div className="relative w-full h-full">
                    {active.image.map((img, idx) => (
                      <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          idx === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${active.title} ${idx + 1}`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                    {active.image.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentSlide 
                            ? 'bg-white w-8' 
                            : 'bg-neutral-600 hover:bg-neutral-500 w-2'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain p-4"
                />
              )}
            </div>

            <p className="text-neutral-400 text-base leading-relaxed mb-8">
              {active.description}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {active.techStack.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3.5 py-1.5 rounded-full border border-neutral-700 text-neutral-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {active.note && (
              <p className="text-sm text-neutral-500 italic mb-8 border-l-2 border-neutral-800 pl-4">
                {active.note}
              </p>
            )}

            <div className="flex gap-8 text-sm tracking-wide">
              {active.demoLink && (
                <a
                  href={active.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-b-2 border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors font-medium"
                >
                  View Live →
                </a>
              )}
              {active.codeLink && (
                <a
                  href={active.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 border-b-2 border-neutral-700 pb-1 hover:text-white hover:border-white transition-colors font-medium"
                >
                  Source Code →
                </a>
              )}
              {active.videoLink && (
                <a
                  href={active.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 border-b-2 border-neutral-700 pb-1 hover:text-white hover:border-white transition-colors font-medium"
                >
                  Watch Video →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}