"use client"
import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import WaterWaveWrapper from "@/components/visual-effects/water-wave"
import Image from "next/image"
import Link from "next/link"
import { FaUser } from "react-icons/fa"
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
          </Card>
        </div>
      )}
    </WaterWaveWrapper>
  )
}
