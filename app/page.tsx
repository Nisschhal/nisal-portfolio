"use client"
import WaterWaveWrapper from "@/components/visual-effects/water-wave"
import AboutSection from "@/sections/aboutSection"
import ContactSetion from "@/sections/contactSection"
import FeaturedSection from "@/sections/featuredSection"
import LandingSection from "@/sections/landingPage"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaUser } from "react-icons/fa"
import { GoHomeFill } from "react-icons/go"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      pertrubuance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          <Toaster richColors position="top-center" />

          {/* Custom Card: title, classNames, and children */}
          <LandingSection />
          <FeaturedSection />

          <AboutSection />
          <ContactSetion />
        </div>
      )}
    </WaterWaveWrapper>
  )
}
