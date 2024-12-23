import Header from "@/components/navigation/header/header"
import React from "react"
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper"
import FancyButton from "@/components/ui/fancy-button"

import { FaArrowRight } from "react-icons/fa"
import LiveClock from "@/components/ui/live-clock"
import ScrollDown from "@/components/ui/scroll-down"

const LandingSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      {/* Button for mobile */}
      <div className="md:hidden absolute bottom-36 left-10  ">
        <MagneticWrapper>
          <FancyButton text={"Let's talk"} icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* Live Clock */}
      <div className="absolute bottom-0 right-0">
        <LiveClock />
      </div>
      {/* Slogan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20 leading-[12vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[16vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
          <div>
            <span>Simple</span>
          </div>
          <div>
            <span>Essential</span>
          </div>
          <div className="relative">
            <span>Impactful</span>
            <div className="text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw]  2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal  ">
              <span>Crafting clean and purposeful solutions</span>
              <br />
              <span>Solving problems with precision and clarity</span>
              <br />
              <span>Prioritizing what truly matters in code</span>
              <br />
              <span> Streamlining complexity into simplicity</span>
            </div>
          </div>
        </div>
        {/* Magnetic Scroll down */}
        <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[2rem] 2xl:-bottom-10">
          <ScrollDown />
        </MagneticWrapper>
      </div>
    </div>
  )
}

export default LandingSection
