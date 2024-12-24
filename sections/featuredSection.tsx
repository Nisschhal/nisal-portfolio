import { FeaturedCard } from "@/components/card-featured/featured-card"
import Heading from "@/components/heading/heading"
import React from "react"
import { featuredData } from "@/data"

const MainFeature = featuredData[0]

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />
      {/* Feature Cards */}
      <FeaturedCard
        title={MainFeature.title}
        tag={MainFeature.tag}
        video={MainFeature.video}
        active={true}
      />
    </div>
  )
}
