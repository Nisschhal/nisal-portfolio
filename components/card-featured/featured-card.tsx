import React, { FC, ReactNode } from "react"
import FeaturedHeader from "./header"

interface FeaturedCardProps {
  logo?: ReactNode
  title: string
  tag: string
  video: string
  active: boolean
}
export const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  active,
}) => {
  return (
    <div className=" link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2  ">
      {/* Header */}
      <FeaturedHeader title={title} tag={tag} />
    </div>
  )
}
