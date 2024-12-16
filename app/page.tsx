"use client"
import Button from "@/components/ui/button"
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
          <Card classNames=" max-w-2xl mx-auto" title="Card Title">
            <div className="grid grid-cols-4">
              <Button>Basic Button</Button>
            </div>
          </Card>
        </div>
      )}
    </WaterWaveWrapper>
  )
}
