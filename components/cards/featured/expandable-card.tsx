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
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredData.slice(1).map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] transition-all origin-center duration-300 ease-in-out "
            // activeCard === i ? "lg:w-[99%]" : "lg:w-[91%]"
          )}
          onMouseEnter={() => handleActiveCard(i)}
          onMouseLeave={() => resetActiveCard()}
        >
          <FeaturedCard
            link={featured.link}
            active={i === activeCard}
            title={featured.title}
            tag={featured.tag}
            // video={featured.video}
            image={featured.image}
          />
        </div>
      ))}
    </div>
  )
}
