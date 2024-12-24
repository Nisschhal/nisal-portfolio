import Header from "@/components/navigation/header/header"
import React from "react"
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper"
import FancyButton from "@/components/ui/fancy-button"

import { FaArrowRight } from "react-icons/fa"
import LiveClock from "@/components/ui/live-clock"

const LandingSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      {/* Button for mobile */}
      <div className="md:hidden absolute bottom-36 right-10  ">
        <MagneticWrapper>
          <FancyButton text={"Let's talk"} icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* Live Clock */}
      <div>
        <LiveClock />
      </div>
    </div>
  )
}

export default LandingSection
