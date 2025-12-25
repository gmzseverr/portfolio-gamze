"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const skills = {
    frontend: {
      title: "Frontend Development",
      items: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "Redux",
        "Context API",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Axios",
      ],
      accent: "cyan",
    },
    backend: {
      title: "Backend & Database",
      items: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
      ],
      accent: "purple",
    },
    tools: {
      title: "Tools & Technologies",
      items: [
        "Git",
        "GitHub",
        "Jira",
        "WordPress",
        "Elementor",
        "Figma",
        "Jest",
        "Cypress",
        "Adobe Illustrator",
      ],
      accent: "orange",
    },
    core: {
      title: "Core Competencies",
      items: [
        "OOP",
        "Design Patterns",
        "Algorithms",
        "Debugging",
        "SEO",
        "Basic UX/UI",
        "Problem Solving",
        "Analytical Thinking",
      ],
      accent: "green",
    },
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([headingRef.current, sublineRef.current], { opacity: 0, y: 30 })
      
      const cards = gridRef.current?.querySelectorAll(".skill-card")
      if (cards) {
        gsap.set(cards, { opacity: 0, y: 40 })
      }

      // Heading animation on scroll
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })

      gsap.to(sublineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })

      // Cards stagger animation
      if (cards) {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        })

        // Hover effects - only on desktop
        if (window.innerWidth >= 768) {
          cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, {
                y: -8,
                duration: 0.4,
                ease: "power2.out",
              })
            })
            card.addEventListener("mouseleave", () => {
              gsap.to(card, {
                y: 0,
                duration: 0.4,
                ease: "power2.out",
              })
            })
          })
        }
      }

      // Parallax effect on section - only on desktop
      if (window.innerWidth >= 768) {
        gsap.to(sectionRef.current, {
          y: 50,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getAccentColor = (accent: string) => {
    const colors = {
      cyan: "border-cyan-500/30 hover:border-cyan-500/60",
      purple: "border-purple-500/30 hover:border-purple-500/60",
      orange: "border-orange-500/30 hover:border-orange-500/60",
      green: "border-emerald-500/30 hover:border-emerald-500/60",
    }
    return colors[accent as keyof typeof colors]
  }

  const getAccentDot = (accent: string) => {
    const colors = {
      cyan: "bg-cyan-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      green: "bg-emerald-500",
    }
    return colors[accent as keyof typeof colors]
  }

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-16 md:py-32 px-6 md:px-16 relative overflow-hidden w-full"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div ref={headingRef} className="mb-4">
            <div className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.35em] uppercase text-neutral-500 mb-3 md:mb-4">
              Technical Expertise
            </div>
            <h2 className="text-[clamp(2rem,8vw,6rem)] leading-[0.9] font-semibold tracking-tight">
              SKILLS &<br />
              <span className="italic font-light">TECHNOLOGIES</span>
            </h2>
          </div>
          <p
            ref={sublineRef}
            className="text-[10px] md:text-[11px] leading-relaxed text-neutral-500 max-w-md tracking-wide"
          >
           Specialized in modern full-stack development
            with emphasis on clean architecture and user-centric solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {Object.entries(skills).map(([key, category]) => (
            <div
              key={key}
              className={`skill-card bg-neutral-900/30 border ${getAccentColor(
                category.accent
              )} backdrop-blur-sm p-5 md:p-8 transition-all duration-300 cursor-default`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-neutral-800">
                <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${getAccentDot(category.accent)}`} />
                <h3 className="text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-neutral-400 font-medium">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 md:px-3 py-1 md:py-1.5 bg-neutral-800/50 border border-neutral-700/50 
                             text-[10px] md:text-[11px] text-neutral-300 hover:text-white hover:border-neutral-600 
                             transition-all duration-300 cursor-default font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills