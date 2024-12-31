import { useEffect, useRef } from "react"
import gsap from "gsap"

const useGSAPAnimation = () => {
  const imgContainerRef = useRef<HTMLImageElement | null>(null)
  const nameRef = useRef<HTMLParagraphElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "Power3.easeOut" },
  })

  useEffect(() => {
    // Second animation (Image, Name, and Subtitle animations)
    if (imgContainerRef.current) {
      tl.fromTo(
        imgContainerRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.5, ease: "elastic.out(1, 0.5)" }
      )
    }

    // Name animation (letter by letter)
    if (nameRef.current) {
      const logoEl = nameRef.current
      const letters = logoEl.textContent?.split("") || []

      // Clear the content and create spans for each letter
      logoEl.textContent = ""
      letters.forEach((letter) => {
        const span = document.createElement("span")
        span.className = "letter"
        span.textContent = letter
        logoEl.appendChild(span)
      })

      // Letter animation
      tl.set(".letter", { display: "inline-block" })
      tl.fromTo(
        ".letter",
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, ease: "back.out(3)", delay: 0.5 }
      )
    }

    // 3D Swinging animation for subtitle
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { rotateX: -30 }, // Start slightly rotated backward
        {
          rotateX: 30, // Swing forward
          duration: 1, // Duration of one swing
          ease: "power1.inOut", // Smooth easing
          repeat: -1, // Infinite repetition
          yoyo: true, // Reverse the animation for swinging back
          transformOrigin: "top center", // Set pivot point for rotation
        }
      )
    }
  }, []) // Second animation on mount

  useEffect(() => {
    // First animation (main slogan and sub-slogans)
    gsap.set("span", { display: "inline-block" })

    // Main slogan parts
    tl.fromTo(".slog1", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 })
    tl.fromTo(".slog2", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 })
    tl.fromTo(".slog3", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 })

    // Sub-slogans
    tl.fromTo(
      ".sub-slog",
      { y: "50%", opacity: 0 },
      { y: 0, opacity: 1, delay: 1, stagger: 0.5 },
      "<20%"
    )

    // Clock animation
    tl.fromTo(".clock", { opacity: 0 }, { opacity: 1 })
  }, []) // First animation on mount

  return {
    imgContainerRef,
    nameRef,
    subtitleRef,
  }
}

export default useGSAPAnimation
