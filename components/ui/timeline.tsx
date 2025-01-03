import Link from "next/link"
import { FC, ReactNode } from "react"

//Timeline Interface -------- ------------ ----------- ------------
interface TimelineProps {
  children: ReactNode
}

import React from "react"
import { FiArrowUpRight } from "react-icons/fi"

export const Timeline: FC<TimelineProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>
}

// Timeline Item
interface TimelineItemProps {
  date: string
  title: string
  subTitle: string
  link?: string
  tag?: string
  isCourse?: string
}

export const TimelineItem: FC<TimelineItemProps> = ({
  date,
  title,
  subTitle,
  link,
  tag,
  isCourse,
}) => {
  return (
    <div className="flex flex-wrap gap-12 min-h justify-start relative">
      {/* Left: Date Timeline */}
      <div
        className="h-auto flex-none break-words whitespace-pre"
        style={{
          width: `${isCourse ? "0" : ""}`,
        }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>

      {/* Right side */}
      <div
        className="flex gapx-2"
        style={{
          transform: `${isCourse ? "trasnlateX(-45px)" : ""}`,
        }}
      >
        <div className="flex flex-col gap-0 5">
          {/* Title */}
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          {/* Subtitle */}
          <div className="flex">
            {link ? (
              <Link className="link" href={link} target="_blank">
                <Body subTitle={subTitle} tag={tag} link={link} />
              </Link>
            ) : (
              <Body subTitle={subTitle} tag={tag} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Timeline Item Body ----------------
interface BodyProps {
  subTitle: string
  tag?: string
  link?: string
}

export const Body: FC<BodyProps> = ({ link, subTitle, tag }) => {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal text-secondary-foreground">
            {tag}
          </p>
        </div>
      ) : null}
    </div>
  )
}
