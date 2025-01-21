"use client"
// import WaterWaveWrapper from "@/components/visual-effects/water-wave"
import AboutSection from "@/sections/aboutSection"
import ContactSetion from "@/sections/contactSection"
import FeaturedSection from "@/sections/featuredSection"
import LandingSection from "@/sections/landingPage"
import { Toaster } from "sonner"
import gsap from "gsap"
import dynamic from "next/dynamic"

// Dynamic import WaterWaveWrapper to ensure it's only used in the client side environment
const WaterWaveWrapper = dynamic(
  () => import("@/components/visual-effects/water-wave"),
  { ssr: false }
)

export default function Home() {
  const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "Power3.easeOut" },
  })

  return (
    // its only on the client side
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
