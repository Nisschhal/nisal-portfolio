import Card from "@/components/ui/card"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import educationData from "@/data/educationData"
import React from "react"

export default function EducationCard({ classNames }: { classNames?: string }) {
  return (
    <Card title="My Education" classNames={classNames}>
      <Timeline>
        {educationData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subTitle={ed.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  )
}
