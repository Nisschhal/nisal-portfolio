import Button from "@/components/ui/button"
import Link from "next/link"
import { ReactNode } from "react"

interface ContactCardProps {
  title: string
  icon: ReactNode
  text: string
  btnText: string
  btnIcon: ReactNode
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  icon,
  text,
  btnText,
  btnIcon,
}) => {
  return (
    <Link
      href={`${
        text.includes("@")
          ? `mailto:${text}`
          : `https://api.whatsapp.com/send?phone=${text
              .split("-")[1]
              .split(" ")
              .join("")}`
      }`}
      target="_blank"
    >
      <div className="bg-secondary-background border border-border rounded-lg relative overflow-hidden py-5 pl-[25px] shadow-md">
        <div className="z-20 flex flex-col gap-8 justify-between items-start">
          {/* Header */}
          <div className="flex items-center gap-x-2">
            <div className="bg-white w-8 h-8 rounded-lg grid place-items-center">
              {icon}
            </div>
            <h1>{title}</h1>
          </div>
          {/* Body Text */}
          <div>
            <h2 className="font-bold text-2xl">{text}</h2>
          </div>
          {/* Button */}
          <Button>
            <div className="w-20 flex items-center justify-center gap-2">
              <span>{btnText}</span>
              <span>{btnIcon}</span>
            </div>
          </Button>
        </div>
      </div>
    </Link>
  )
}

export default ContactCard
