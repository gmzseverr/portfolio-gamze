"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const Header = () => {
  const headerRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Header fade-in animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
        }
      )
    }

    // Active section detection on scroll
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Menu animation
  useEffect(() => {
    if (!menuRef.current) return

    if (menuOpen) {
      // Disable scroll when menu open
      document.body.style.overflow = "hidden"

      // Open menu
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      })

      // Animate menu items
      const items = menuRef.current.querySelectorAll(".menu-item")
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        }
      )
    } else {
      // Enable scroll when menu closed
      document.body.style.overflow = "auto"

      // Close menu
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      })
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header
        ref={headerRef}
        className="fixed md:relative top-0 left-0 right-0 bg-black text-white border-b border-neutral-900 z-50 w-full"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="w-12 h-12 md:w-14 md:h-14 group">
            <img
              src="/5.png"
              alt="Gamze Sever"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em]">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="md:hidden fixed inset-0 bg-black z-[100] translate-x-full"
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-white text-2xl"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className={`menu-item text-3xl uppercase tracking-[0.2em] transition-colors ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-neutral-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Bottom info */}
          <div className="p-6 border-t border-neutral-900">
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 text-center">
              Gamze Sever — Full-Stack Developer
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header