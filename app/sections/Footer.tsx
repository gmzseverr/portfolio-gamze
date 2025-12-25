"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)
  const columnsRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    const ctx = gsap.context(() => {
      // Columns animation (stagger)
      const columns = columnsRef.current?.querySelectorAll(".footer-column")
      if (columns) {
        gsap.fromTo(
          columns,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
            },
          }
        )
      }

      // Bottom bar animation
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      )
    }, footerRef)



    return () => ctx.revert()
  }, [])

  // Footer.tsx veya ayrı bir utils file

const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={footerRef} id="contact" className="bg-black text-white border-t border-neutral-900 py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Info */}
          <div className="footer-column">
            <div className="text-xl font-bold mb-2">Gamze Sever</div>
            <p className="text-[13px] text-neutral-600">
              Full-Stack Developer
            </p>
          </div>

          {/* Center - Links */}
          <div className="footer-column">
            <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-700 mb-4">
              Quick Links
            </div>
            <div className="space-y-2 text-[13px]">
              <a
              onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('about')
              }}
              href="#about"
                className="block text-neutral-500 hover:text-white transition-colors"
              >
                About
              </a>
              <a   onClick={(e) => {
                e.preventDefault()
                smoothScrollTo('skills')
              }}
                href="#skills"
                className="block text-neutral-500 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollTo('projects')
                }}
                href="#projects"
                className="block text-neutral-500 hover:text-white transition-colors"
              >
                Projects
              </a>
             
            </div>
          </div>

          {/* Right - Social */}
          <div className="footer-column">
            <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-700 mb-4">
              Connect
            </div>
            <div className="space-y-2 text-[13px]">
              <a
                href="https://www.linkedin.com/in/gamzesever/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-500 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/gmzseverr"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-500 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:gmzsever12@gmail.com"
                className="block text-neutral-500 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div ref={bottomRef} className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-[11px] text-neutral-700">
            © {new Date().getFullYear()} Gamze Sever. All rights reserved.
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-[11px] tracking-[0.25em] uppercase text-neutral-600 hover:text-white transition-colors border-b border-neutral-800 hover:border-white pb-1"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer