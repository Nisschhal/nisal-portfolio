import BackgroundCard from "@/components/cards/about/backgroundCard"
import EducationCard from "@/components/cards/about/educationCard"
import ExperienceCard from "@/components/cards/about/experience"
import MeCard from "@/components/cards/about/me"
import ResumeCard from "@/components/cards/about/resume"
import SoftSkillsCard from "@/components/cards/about/softSkillsCard"
import StackCard from "@/components/cards/about/stackCard"
import Heading from "@/components/heading/heading"
import Card from "@/components/ui/card"
import Gallery from "@/components/ui/gallery"
import React from "react"

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number={"02"} title_1={"About"} title_2={"Me"} />
      <div className="space-y-4 py-8">
        {/* Personal Info || Resume || Background */}
        <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0 2xl:grid-cols-4">
          <MeCard /> {/* First priority: Personal information and photo */}
          <ResumeCard /> {/* Second: Resume */}
          <BackgroundCard /> {/* Third: Background */}
          <div className=" md:block lg:hidden ">
            <EducationCard classNames="h-full" /> {/* Sixth: Education */}
          </div>
        </div>

        {/* Professional Sections (Experience, Education, and Tech Stack) */}
        <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0 2xl:grid-cols-4">
          <div className="space-y-4">
            <StackCard /> {/* Fourth: Your tech stack */}
            <ExperienceCard /> {/* Fifth: Work experience */}
          </div>

          {/* Gallery Section (Optional but adds visual appeal) */}
          <div className="space-y-4 2xl:hidden">
            <Gallery /> {/* Seventh: Visual work or projects */}
            <div className=" md:block lg:hidden">
              <SoftSkillsCard />
            </div>{" "}
          </div>

          {/* Additional Info (Soft Skills and Rotaract Journey) */}
          <div className="space-y-4 ">
            {/* <Card title="Soft Skills">Soft Skills</Card>{" "} */}
            <div className="block md:hidden lg:block">
              <SoftSkillsCard />
            </div>{" "}
            {/* Eighth: Soft skills */}
            <div className="hidden lg:block ">
              <EducationCard /> {/* Sixth: Education */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
