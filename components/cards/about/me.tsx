import Card from "@/components/ui/card"
import React from "react"
import { cn } from "@/lib/utils"

export default function MeCard() {
  return (
    <Card classNames="h-[500px] md:h-full bg-cover bg-center bg-no-repeat bg-[url('/assets/gallery/me7.jpg')]">
      <div className="absolute top-[3%] space-y-2">
        <Tag
          text="Hello, world 👋 !"
          className="rounded-tl-md  hover:scale-105 duration-300 "
        />
        <Tag
          text="I'm Nischal Puri"
          className="rounded-tl-md hover:scale-105 duration-300  "
        />
        <Tag
          text="Full Stack Developer 💻"
          className="rounded-tl-md hover:scale-105 duration-300  "
        />
        <Tag
          text="Tech Innovator ⚙🔧"
          className="rounded-tl-md hover:scale-105 duration-300  "
        />
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
