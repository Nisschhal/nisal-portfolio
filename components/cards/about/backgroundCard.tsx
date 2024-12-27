import Card from "@/components/ui/card"
import React from "react"

export default function BackgroundCard() {
  return (
    <Card classNames="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Origniated from a humble beginning in a &nbsp;{" "}
          <span className="text-white underline">
            beautiful place Devdaha Kahireni,Nepal
          </span>
          , my early years were marked by enduring harsh living conditions.
          However, fortune smiled upon me
        </p>
      </div>
    </Card>
  )
}
