import { FeaturedCard } from "@/components/cards/featured/featured-card"
import Heading from "@/components/heading/heading"
import React from "react"
import { featuredData } from "@/data"
import ExpandableFeatured from "@/components/cards/featured/expandable-card"
import Carhive from "@/public/assets/images/projects/carhive.png"

const MainFeature = featuredData[0]

export default function FeaturedSection() {
  return (
    <section id="featured" className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />
      {/* Feature Cards */}
      <FeaturedCard
        link="https://nischal-sage-dev-craft-dark.vercel.app"
        title={MainFeature.title}
        tag={MainFeature.tag}
        image={Carhive.src}
        // video={MainFeature.video}
        active={true}
        featured={true}
      />
      {/* Other Cards */}
      <div id="projects" className="mt-24">
        <ExpandableFeatured />
      </div>
    </section>
  )
}
