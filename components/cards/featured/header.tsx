interface HeaderProps {
  title: string
  tag: string
}

import React, { FC } from "react"

const FeaturedHeader: FC<HeaderProps> = ({ title, tag }) => {
  return (
    <div className="bg-secondary-background flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border-border rounded-2xl">
      {/* Title */}
      <div>
        <p className=" text-lg font-medium leading-3 text-primary-foreground">
          {title}
        </p>
      </div>
      {/* Tag */}
      <div>
        <p className="text-lg font-medium leading-3 font-pixel text-primary-foreground opacity-25">
          {tag}
        </p>
      </div>
    </div>
  )
}

export default FeaturedHeader
