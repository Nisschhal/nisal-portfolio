"use client"
import Card from "@/components/ui/card"
import WaterWaveWrapper from "@/components/visual-effects/water-wave"
import Image from "next/image"
import Link from "next/link"

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
          <Card classNames="text-white max-w-2xl mx-auto" title="Card Title">
            ...
          </Card>
        </div>
      )}
    </WaterWaveWrapper>
  )
}
