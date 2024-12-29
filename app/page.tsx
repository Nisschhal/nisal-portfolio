"use client"
import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import FancyButton from "@/components/ui/fancy-button"
import Input from "@/components/ui/input"
import LiveClock from "@/components/ui/live-clock"
import Profile from "@/components/ui/profile"
import ScrollDown from "@/components/ui/scroll-down"
import TextArea from "@/components/ui/text-area"
import MagneticWrapper from "@/components/visual-effects/magnetic-wrapper"
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
