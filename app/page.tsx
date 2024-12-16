"use client"
import WaterWaveWrapper from "@/components/visual-effects/water-wave"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="5"
      pertrubuance="3"
      resolution="2048"
    >
      {() => <div className="h-screen"></div>}
    </WaterWaveWrapper>
  )
}
