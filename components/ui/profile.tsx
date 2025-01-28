// import Image from "next/image"
// import myImage from "@/public/assets/images/myImage.jpg"
// import me15 from "@/public/assets/gallery/me15.jpg"

// export default function Profile() {
//   return (
//     <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
//       {/* Photo */}
//       <div className="relative w-[100px] rounded-full h-[100px] flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
//         <Image
//           src={me15}
//           alt="Nischal Puri"
//           className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
//         />
//         {/* {Online Dot} */}
//         <div className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
//       </div>
//       {/* Name */}
//       <div className="relative">
//         <p className="text-3xl font-medium">NISCHAL PURI</p>
//         <p className="opacity-50 text-sm absolute top-[25px] ">
//           <span className="text-lg font-thin">(</span>Software Essentialists
//           <span className="text-lg font-thin">)</span>
//         </p>
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"
import me15 from "@/public/assets/gallery/me15.jpg"

export default function Profile({ tl }: { tl?: gsap.core.Timeline }) {
  const nameRef = useRef<HTMLParagraphElement>(null) // Ref for the name element
  const imgContainerRef = useRef<HTMLDivElement>(null) // Ref for the image container
  const subtitleRef = useRef<HTMLParagraphElement>(null) // Ref for the swinging text

  useEffect(() => {
    if (!tl) return // Exit early if `tl` is not provided

    // Image animation
    if (imgContainerRef.current) {
      tl.fromTo(
        imgContainerRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, delay: 0.5, ease: "elastic.out(1, 0.5)" }
      )
    }

    // Name animation
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
  }, [tl]) // Only re-run the effect when `tl` changes

  return (
    <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
      {/* Photo */}
      <div
        ref={imgContainerRef}
        className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol"
      >
        <Image
          src={me15}
          alt="Nischal Puri"
          className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
        />
        {/* Online Dot */}
        <div className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
      </div>

      {/* Name */}
      <div className="relative">
        <p
          ref={nameRef}
          className="sm:text-3xl font-medium" // Reference for animation
        >
          NISCHAL PURI
        </p>
        {/* Swinging Subtitle */}
        <p
          ref={subtitleRef}
          className="opacity-50 text-xs sm:text-sm absolute top-[25px]" // Position below the logo
        >
          <span className=" font-thin">(</span>Software Developer
          <span className=" font-thin">)</span>
        </p>
      </div>
    </div>
  )
}
