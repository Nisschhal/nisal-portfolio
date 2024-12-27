import Card from "@/components/ui/card"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import React, { FC } from "react"
import { FiArrowUpRight } from "react-icons/fi"

export default function ExperienceCard() {
  return (
    <Card classNames="" title="My Experience">
      <Timeline>
        <TimelineItem
          date={"2020-2021"}
          title={"Full stack engineer"}
          subTitle={"Toptal"}
          tag="new"
          link="/t"
        />
        <span>b</span>
      </Timeline>
    </Card>
  )
}
