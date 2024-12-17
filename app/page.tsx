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
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaUser } from "react-icons/fa"
import { GoHomeFill } from "react-icons/go"
export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      pertrubuance="3"
      resolution="2048"
    >
      {() => (
        <div className="h-screen p-20">
          {/* Custom Card: title, classNames, and children */}
          <Card classNames=" max-w-2xl mx-auto" title="Card Title">
            <div className="flex gap-4">
              <Button>
                <GoHomeFill />
                Basic Button
              </Button>
              <Button isIcon>
                <FaUser />
              </Button>
              <Button link={"https://www.google.com"}> Google </Button>
            </div>
            <Input type="text" placeholder="Full name" />
            <Input type="text" placeholder="Full name" icon={<FaUser />} />
            <TextArea placeholder="Describe something..." />
            <Profile />
            {/* Moving Button */}
            <MagneticWrapper className="w-[300px]">
              <FancyButton text="Contact us" icon={<FaArrowRight />} />
            </MagneticWrapper>
            <LiveClock />
            {/* Moving Arrow */}
            <MagneticWrapper className="">
              <ScrollDown />
            </MagneticWrapper>
          </Card>
        </div>
      )}
    </WaterWaveWrapper>
  )
}
