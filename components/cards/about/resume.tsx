import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import Socials from "@/components/ui/socials"
import React from "react"
import { FaDownload } from "react-icons/fa"

export default function ResumeCard() {
  return (
    <Card classNames="md:h-full 2xl:h-fit">
      <p className="text-lg xl:text-2xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias
        repellat, odio natus unde minima.
      </p>
      {/* Signature */}
      <div className="">
        {/* <Image src={} alt="nischal puri signature" /> */}
      </div>
      {/* Socials and Resume download btn */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* Socials */}
        <Socials />
        <div className="group duration-300">
          <Button classNames="group-hover:bg-white transition-bg duration-300">
            <span className="flex gap-2 group-hover:invert transition-all dur">
              <FaDownload />
              Resume
            </span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
