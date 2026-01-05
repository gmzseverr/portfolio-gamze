"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  const ghostRef = useRef<HTMLHeadingElement>(null)
  const mainRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLHeadingElement>(null)

  const bylineRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLDivElement>(null)

  const socialsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const topLeftRef = useRef<HTMLDivElement>(null)
  const topRightRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      /* INITIAL STATE */
      gsap.set(
        [
          ghostRef.current,
          mainRef.current,
          subRef.current,
          bylineRef.current,
          descRef.current,
          socialsRef.current,
          scrollRef.current,
          topLeftRef.current,
          topRightRef.current,
          bottomRef.current,
        ],
        { opacity: 0 }
      )

      gsap.set(socialsRef.current, { x: 12 })
      gsap.set(scrollRef.current, { y: 10 })

      /* ENTRANCE */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.to([topLeftRef.current, topRightRef.current], {
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
      })
        .to(
          ghostRef.current,
          { opacity: 0.04, duration: 1.2 },
          0.3
        )
        .fromTo(
          mainRef.current,
          { y: 80, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2 },
          0.5
        )
        .fromTo(
          subRef.current,
          { x: 120, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          0.8
        )
        .fromTo(
          [bylineRef.current, descRef.current],
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
          1.2
        )
        .to(
          socialsRef.current,
          { opacity: 1, x: 0, duration: 0.8 },
          1.4
        )
        .to(scrollRef.current, { opacity: 1, y: 0, duration: 0.6 }, 1.6)
        .fromTo(
          bottomRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          1.6
        )

      /* SCROLL EFFECTS */
      gsap.to(ghostRef.current, {
        y: "-15%",
        opacity: 0.015,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.to(mainRef.current, {
        letterSpacing: "0.03em",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "30% top",
          scrub: 1,
        },
      })

      gsap.to(scrollRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "20% top",
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen w-full bg-black text-white overflow-hidden relative"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Top captions */}
      <div
        ref={topLeftRef}
        className="absolute top-4 md:top-6 left-4 md:left-8 text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-neutral-500 z-10"
      >
        Portfolio · 2026
      </div>
      <div
        ref={topRightRef}
        className="absolute top-4 md:top-6 right-4 md:right-8 text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-neutral-500 z-10"
      >
        {/* Empty or add content */}
      </div>

      {/* Socials - Hidden on mobile, visible on desktop */}
      <div
        ref={socialsRef}
        className="hidden md:flex absolute z-10 right-6 top-1/2 -translate-y-1/2 flex-col gap-8 text-[10px] tracking-[0.35em] uppercase text-neutral-600"
      >
        <a 
          href="https://github.com/gmzseverr" 
          className="hover:text-white transition-colors cursor-pointer" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a 
      href="https://www.linkedin.com/in/gamzesever/"
          className="hover:text-white transition-colors cursor-pointer" 
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:gmzsever12@gmail.com" 
          className="hover:text-white transition-colors cursor-pointer"
        >
          Mail
        </a>
      </div>

      {/* MAIN */}
      <div className="min-h-screen flex flex-col justify-center px-6 md:px-16 relative py-20 md:py-0">
        {/* Ghost */}
        <h1
          ref={ghostRef}
          className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-[clamp(4rem,15vw,20rem)] font-semibold tracking-[0.12em] pointer-events-none"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.04)",
            color: "transparent",
          }}
        >
          FULLSTACK
        </h1>

        {/* Headline */}
        <div className="relative z-10">
          <h1
            ref={mainRef}
            className="text-[clamp(2.5rem,12vw,9.5rem)] leading-[0.9] font-semibold tracking-[0.07em]"
          >
            FULLSTACK
          </h1>
          <h1
            ref={subRef}
            className="mt-2 ml-4 md:ml-16 text-[clamp(2.3rem,11vw,9.2rem)] leading-[0.9] italic font-light"
          >
            DEVELOPER
          </h1>
        </div>

        {/* Byline */}
        <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-0 relative z-10">
          <div
            ref={bylineRef}
            className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-neutral-500"
          >
            By Gamze Sever
          </div>
          <div
            ref={descRef}
            className="max-w-xs text-[10px] md:text-[11px] leading-relaxed text-neutral-500 md:text-right"
          >
            Crafting structured full-stack systems with editorial restraint,
            long-term clarity and quiet confidence.
          </div>
        </div>

        {/* Mobile Socials - Visible only on mobile */}
        <div
          className="md:hidden mt-8 flex gap-6 text-[10px] tracking-[0.25em] uppercase text-neutral-600 relative z-10"
        >
          <a 
            href="https://github.com/gmzseverr" 
            className="hover:text-white transition-colors" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
                href="https://www.linkedin.com/in/gamzesever/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-500 hover:text-white transition-colors"
              >
            LinkedIn
          </a>
          <a 
            href="mailto:gmzsever12@gmail.com" 
            className="hover:text-white transition-colors"
          >
            Mail
          </a>
        </div>
      </div>

      {/* Scroll */}
      <div
        ref={scrollRef}
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-neutral-500 z-10"
      >
        <span>Scroll</span>
        <div className="w-px h-10 md:h-12 bg-neutral-700" />
      </div>

      {/* Bottom */}
      <div
        ref={bottomRef}
        className="absolute bottom-8 md:bottom-20 left-0 w-full border-t border-neutral-800 px-6 md:px-12 py-3 md:py-4 flex flex-col md:flex-row justify-between gap-2 md:gap-0 text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.35em] uppercase text-neutral-600 z-10"
      >
        <span>Based in EU</span>
        <span>Remote · Available</span>
      </div>
    </section>
  )
}

export default Hero