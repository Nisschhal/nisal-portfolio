import Heading from "@/components/heading/heading"
import Card from "@/components/ui/card"
import React from "react"

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number={"02"} title_1={"About"} title_2={"Me"} />
      <div className="space-y-4 py-8">
        {/* Personal Info || Resume || Background */}
        <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0 2xl:grid-cols-4">
          {/* Col 1: Me  || Resume ||Card */}
          <div className="space-y-4">
            <Card title="Me">Me</Card>
            <Card title="Resume">Resume</Card>
            <Card title="Background">Background</Card>
          </div>
          {/* Certification || Experience || Education */}
          <div className="space-y-4">
            <Card title="Stack">Stack</Card>
            <Card title="Experience">Experience</Card>
            <Card title="Education">Education</Card>
          </div>
          {/* Gallery */}
          <div className="space-y-4 2xl:hidden">
            <Card title="Gallery">Gallery</Card>
            <Card title="Gallery">Gallery</Card>
          </div>
          {/* ECAS: Rotaract || Sof Skills */}
          <div className="space-y-4 ">
            <Card title="Soft Skills">Soft Skills</Card>
            <Card title="Rotaract Journey">Rotaract Journey</Card>
          </div>
        </div>
      </div>
    </div>
  )
}
