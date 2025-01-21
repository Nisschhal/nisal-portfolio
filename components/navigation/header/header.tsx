import FancyButton from "@/components/ui/fancy-button"
import Profile from "@/components/ui/profile"
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper"
import React, { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import ToggleButton from "../full-screen-menu/toggleButton"
import FullScreenMenu from "../full-screen-menu/fullScreenMenu"
import { AnimatePresence } from "framer-motion"

export default function Header({ tl }: { tl: gsap.core.Timeline }) {
  const [open, setOpen] = useState<boolean>(false)
  const [showToggle, setShowToggle] = useState<boolean>(false)

  // Scroll Event:
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowToggle(true)
      } else {
        setShowToggle(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    // remove event when unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // GSAP Animation
  useEffect(() => {}, [])

  return (
    <div className="w-full flex items-start justify-center p-8 md:justify-between">
      <Profile tl={tl} />
      <div className="hidden md:inline  ">
        <MagneticWrapper>
          <FancyButton tl={tl} text={"Let's talk"} icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {showToggle && <ToggleButton open={open} setOpen={setOpen} />}
      <AnimatePresence mode="wait">
        {open && <FullScreenMenu open={open} setOpen={setOpen} tl={tl} />}
      </AnimatePresence>
    </div>
  )
}
