"use client"
import { FeaturedCard } from "@/components/cards/featured/featured-card"
import Heading from "@/components/heading/heading"
import React, { useEffect, useState } from "react"
import { featuredData } from "@/data"
import ExpandableFeatured from "@/components/cards/featured/expandable-card"

let mainFeature = featuredData[0]
export default function FeaturedSection() {
  // const [windowDimensions, setWindowDimensions] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // })

  // const [mainFeature, setMainFeature] = useState(
  //   window.innerWidth > 768 ? featuredData[1] : featuredData[0]
  // )

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth
  //     setWindowDimensions({ width, height: window.innerHeight })

  //     // Update MainFeature based on the window width
  //     setMainFeature(width <= 768 ? featuredData[1] : featuredData[0])
  //   }

  //   window.addEventListener("resize", handleResize)

  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])

  return (
    <section id="featured" className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />
      {/* Feature Cards */}
      <FeaturedCard
        link={mainFeature.link}
        title={mainFeature.title}
        tag={mainFeature.tag}
        image={mainFeature.image}
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
