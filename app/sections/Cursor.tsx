"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Hide default cursor
    document.body.style.cursor = "none"

    // Mouse move
    const handleMouseMove = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2,
        ease: "power2.out",
      })
    }

    // Hover on interactive elements - just scale a bit
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Only on links and buttons
    const interactiveElements = document.querySelectorAll("a, button")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.body.style.cursor = "auto"
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999]"
      style={{
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
    />
  )
}

export default Cursor