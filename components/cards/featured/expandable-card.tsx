import { featuredData } from "@/data"
import React, { useState } from "react"
import { FeaturedCard } from "./featured-card"
import { cn } from "@/lib/utils"

export default function ExpandableFeatured() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const handleActiveCard = (index: number) => {
    setActiveCard(index)
  }
  const resetActiveCard = () => {
    setActiveCard(null)
  }
  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {featuredData.slice(1).map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] lg:w-1/3 transition-all origin-center duration-300 ease-in-out ",
            activeCard === i ? "lg:w-[40%]" : "lg:w-[33%]"
          )}
          onMouseEnter={() => handleActiveCard(i)}
          onMouseLeave={() => resetActiveCard()}
        >
          <FeaturedCard
            active={i === activeCard}
            title={featured.title}
            tag={featured.tag}
            video={featured.video}
          />
        </div>
      ))}
    </div>
  )
}
