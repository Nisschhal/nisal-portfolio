import Card from "@/components/ui/card"
import Image from "next/image"
import React from "react"
import myImg1 from "@/public/assets/gallery/myImg1.jpg"
import { cn } from "@/lib/utils"

export default function MeCard() {
  return (
    <Card classNames="2xl:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={myImg1}
          alt="nischal puri"
          className="absolute top-0 letf-0 bottom-0 right-0 h-full w-full object-cover"
        />
        {/* Tags */}
        <div className="absolute top-[65%] space-y-2">
          <Tag text="Hello, world :)" className="rounded-tl-md   " />
          <Tag text="I'm Nischal Puri" className="rounded-tl-md  " />
          <Tag text="Full Stack Developer" className="rounded-tl-md  " />
          <Tag text="Software Essentialists" className="rounded-tl-md  " />
        </div>
      </div>
    </Card>
  )
}

const Tag = ({ className, text }: { className: string; text: string }) => {
  return (
    <div
      className={cn("bg-black/[0.7] w-fit py-1.5 px-3 rounded-full", className)}
    >
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  )
}
