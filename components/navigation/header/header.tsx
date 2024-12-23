import FancyButton from "@/components/ui/fancy-button"
import Profile from "@/components/ui/profile"
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper"
import React from "react"
import { FaArrowRight } from "react-icons/fa"

export default function Header() {
  return (
    <div className="w-full flex items-center justify-center p-8 md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text={"Let's talk"} icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
    </div>
  )
}
