import { FC, ReactNode } from "react"

interface ButtonProps {
  text: string
  icon: ReactNode
}

const FancyButton: FC<ButtonProps> = ({ text, icon }) => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=9818275115"
      className="fancy-btn z-100"
      target="_blank"
    >
      <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108rem] py-3 px-6 flex items-center gap-2 font-bold text-3xl cursor-pointer transition-all duration-75">
        <span>{text}</span>
        <span className="group-hover:translate-x-[.75vw] transition-transform duration-100">
          {icon}
        </span>
      </div>
    </a>
  )
}

export default FancyButton
