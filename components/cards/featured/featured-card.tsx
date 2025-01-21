// import React, { FC, ReactNode } from "react"
// import FeaturedHeader from "./header"
// import Video from "./video"
// import Link from "next/link"

// interface FeaturedCardProps {
//   logo?: ReactNode
//   title: string
//   tag: string
//   video: string
//   active: boolean
//   link: string
// }
// export const FeaturedCard: FC<FeaturedCardProps> = ({
//   logo,
//   title,
//   tag,
//   video,
//   active,
//   link,
// }) => {
//   return (
//     <Link target="_blank" href={link}>
//       <div className=" link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2  ">
//         {/* Header */}
//         <FeaturedHeader title={title} tag={tag} />
//         {/* Body */}
//         <div className="relative p-6 w-full items-center justify-center h-[550px] border border-border rounded-2xl">
//           {/* Video  */}
//           <Video video={video} active={active} />
//         </div>
//       </div>
//     </Link>
//   )
// }

import React, { FC, ReactNode } from "react"
import FeaturedHeader from "./header"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FeaturedCardProps {
  active: boolean
  logo?: ReactNode
  title: string
  tag: string
  image: string // Updated to accept an image path
  link: string
  featured?: boolean
}
export const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  image,
  link,
  active,
  featured = false,
}) => {
  return (
    <Link target="_blank" href={link}>
      <div className="link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
        {/* Header */}
        <FeaturedHeader title={title} tag={tag} />
        {/* Body */}
        <div className="relative w-full h-[550px] border border-border rounded-2xl overflow-hidden">
          {/* Image */}
          <Image
            src={image}
            alt={title}
            className={cn(
              "w-full h-full duration-500 transition-all object-cover scale-100",
              // {"scale-12"},
              active && !featured && "scale-125",
              !active && "lg:grayscale"
            )}
            fill
            sizes="100%"
          />
        </div>
      </div>
    </Link>
  )
}
