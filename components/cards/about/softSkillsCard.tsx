import Card from "@/components/ui/card"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import softSkillsData from "@/data/softSkillsData"
import React from "react"

export default function SoftSkillsCard() {
  return (
    <Card title="Soft Skills">
      <Timeline>
        {softSkillsData.map((ed, i) => (
          <div className="group flex items-center gap-2" key={i}>
            <div className="w-4 h-4 rounded-full bg-primary-background group-hover:bg-primary-foreground duration-200 transition-all"></div>{" "}
            <TimelineItem title={ed.title} subTitle={ed.subTitle} />
          </div>
        ))}
      </Timeline>
    </Card>
  )
}
