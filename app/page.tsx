"use client"
import WaterWaveWrapper from "@/components/visual-effects/water-wave"
import AboutSection from "@/sections/aboutSection"
import ContactSetion from "@/sections/contactSection"
import FeaturedSection from "@/sections/featuredSection"
import LandingSection from "@/sections/landingPage"
import { Toaster } from "sonner"
import gsap from "gsap"
export default function Home() {
  const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "Power3.easeOut" },
  })

  // useGSAPAnimation()
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
          <LandingSection tl={tl} />
          <FeaturedSection />

          <AboutSection />
          <ContactSetion />
        </div>
      )}
    </WaterWaveWrapper>
  )
}
