"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
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

      // Stats animation
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      )

      // Highlight boxes animation
      const highlights = statsRef.current?.querySelectorAll(".highlight-box")
      if (highlights) {
        gsap.fromTo(
          highlights,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about"
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-32 px-8 md:px-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Label */}
        <div className="text-[9px] tracking-[0.4em] uppercase text-neutral-600 mb-12">
          — About Me
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Main Content */}
          <div ref={contentRef}>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] font-bold mb-8 tracking-tight">
  FROM DIFFERENT
  <br />
  <span className="italic font-light text-neutral-500 relative">
    PERSPECTIVES
    <span className="absolute -bottom-2 left-0 w-12 h-[1px] bg-neutral-600" />
  </span>
</h2>


            <div className="space-y-6 text-[14px] leading-relaxed text-neutral-400">
            <p>
                I come from a non-traditional background, which shaped how I think about
                software. I don’t just write code to make things work —
                <span className="text-white italic">
                  I build systems that make sense.
                </span>
              </p>

              <p>
                My focus is on clarity, structure, and long-term maintainability.
                I enjoy breaking complex problems into simple, scalable solutions
                and turning ideas into interfaces people actually enjoy using.
              </p>

              <p className="pt-4 border-t border-neutral-800">
                I work comfortably across frontend and backend, with a strong interest
                in product thinking, performance, and clean architecture.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 flex gap-6">
              <a
                href="#contact"
                className="text-[11px] tracking-[0.25em] uppercase border-b border-white pb-1 
                         hover:text-neutral-400 hover:border-neutral-400 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/gmzseverr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.25em] uppercase text-neutral-500 
                         border-b border-neutral-700 pb-1 hover:text-white 
                         hover:border-white transition-colors"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Right: Highlights & Stats */}
          <div ref={statsRef}>
            {/* Key Highlights */}
            <div className="space-y-6">
      

             
              <div className="highlight-box border-l-4 border-orange-500 pl-6 py-4">
                <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 mb-2">
                  Current Role
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Web &Frontend Developer
                </h3>
                <p className="text-[13px] text-neutral-500 leading-relaxed">
                  At Callisto Digital, developing responsive websites using React and WordPress, while driving growth through UI/UX enhancements and performance-focused SEO optimizations."
                </p>
              </div>

            
            {/* Quick Facts */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 mb-6">
                Quick Facts
              </div>
              <div className="grid grid-cols-2 gap-4 text-[12px]">
                <div>
                  <div className="text-neutral-600">Languages</div>
                  <div className="text-white">Turkish, English</div>
                </div>
                <div>
                  <div className="text-neutral-600">Work Auth</div>
                  <div className="text-white">EU Citizen</div>
                </div>
                <div>
                  <div className="text-neutral-600">Remote</div>
                  <div className="text-white">100% Ready</div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About