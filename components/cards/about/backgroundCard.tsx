import Card from "@/components/ui/card"
import React from "react"

export default function BackgroundCard() {
  return (
    <Card classNames="md:h-full" title="My Background">
      <div>
        {/* <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Origniated from a humble beginning in a &nbsp;{" "}
          <span className="text-white underline">
            beautiful place Devdaha Kahireni,Nepal
          </span>
          , my early years were marked by enduring harsh living conditions.
          However, fortune smiled upon me
        </p> */}
        <div>
          <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
            Born and raised in{" "}
            <span className="text-white underline">Devdaha, Nepal</span>, my
            journey began with a curiosity for technology. Despite challenges, I
            developed a passion for learning and problem-solving as an aspiring
            full-stack developer.
          </p>

          <p className="leading-[160%] font-normal text-white/[0.4] text-[16px] mt-4">
            I hold a{" "}
            <span className="text-white font-semibold">
              BSc (Hons) in Computing
            </span>{" "}
            from Coventry University, UK, specializing in{" "}
            <span className="text-white underline">Network Security</span>,{" "}
            <span className="text-white underline">Web Development</span>, and{" "}
            <span className="text-white underline">Blockchain Technology</span>.
          </p>

          <p className="leading-[160%] font-normal text-white/[0.4] text-[16px] mt-4">
            As Vice President of the Rotaract Club, I led initiatives like the{" "}
            <span className="text-white underline">
              National PUBG Tournament
            </span>{" "}
            for charity and the{" "}
            <span className="text-white underline">
              Digital Dillibazar Project
            </span>{" "}
            for integrating QR payments into businesses.
          </p>

          <p className="leading-[160%] font-normal text-white/[0.4] text-[16px] mt-4">
            I aspire to excel in full-stack development, delivering scalable,
            high-quality solutions that meet user and client needs, driven by a
            passion for growth and impactful contributions to the tech industry.
          </p>
        </div>
      </div>
    </Card>
  )
}
