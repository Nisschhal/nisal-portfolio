import { cn } from "@/lib/utils"
import { FC, ReactNode } from "react"

interface CardProps {
  title?: string
  children: ReactNode
  classNames?: string
}

const Card: FC<CardProps> = ({ title, children, classNames }) => {
  return (
    <div
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground overflow-hidden",
        classNames
      )}
    >
      <div className="flex flex-col gap-y-6 ">
        {/* Title */}
        {title ? (
          <div className="font-pixel">
            <p className="uppercase text-lg text-white">{title}</p>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  )
}

export default Card
