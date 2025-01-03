import Card from "@/components/ui/card"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { experiencesDate } from "@/data"
import React, { FC } from "react"
import { FiArrowUpRight } from "react-icons/fi"

export default function ExperienceCard() {
  return (
    <Card classNames="" title="My Experience">
      <Timeline>
        {experiencesDate.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            link={ex.link}
            tag={ex.tag}
          />
        ))}

        <span>b</span>
      </Timeline>
    </Card>
  )
}
