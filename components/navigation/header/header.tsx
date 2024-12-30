import FancyButton from "@/components/ui/fancy-button"
import Profile from "@/components/ui/profile"
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper"
import React, { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import ToggleButton from "../full-screen-menu/toggleButton"

export default function Header() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="w-full flex items-start justify-center p-8 md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text={"Let's talk"} icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      <ToggleButton open={open} setOpen={setOpen} />
    </div>
  )
}
