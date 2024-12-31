import React, { FC } from "react"
import SvgCurve from "../visual-effects/svg-curve"
import { HeadingAnimatedSvg } from "./heading-animated-svg"

interface HeadingProps {
  number: string
  title_1: string
  title_2: string
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2 }) => {
  return (
    <div className="relative my-10 z-20">
      {/* Number Container */}
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
      </div>
      {/* Heading text wrapper */}
      <div className="flex items-center flex-nonwrap min-h-min overflow-hidden p-0 w-full font-oswald">
        {/* Title 1: Featured */}
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3">
          {title_1}
        </p>
        <HeadingAnimatedSvg
          text={`${
            title_1.toLowerCase() == "featured"
              ? "Highlighting my best work.”".toUpperCase()
              : "Skills, experience, and growth.".toUpperCase()
          }`}
        />
        {/* Title 2: Work (italic)*/}
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3 italic">
          {title_2}
        </p>
      </div>

      {/* SVG Curve */}
      <SvgCurve />
    </div>
  )
}

export default Heading
