import Card from "@/components/ui/card"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { experiencesDate } from "@/data"

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
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  )
}
