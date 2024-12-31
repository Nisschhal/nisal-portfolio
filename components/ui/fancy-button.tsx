import { FC, ReactNode, useEffect } from "react"

interface ButtonProps {
  text: string
  icon: ReactNode
  tl: gsap.core.Timeline
}

const FancyButton: FC<ButtonProps> = ({ text, icon, tl }) => {
  useEffect(() => {
    // Ensure that the element with the class "cta" is rendered
    if (tl) {
      tl.fromTo(".cta", { x: "-500% ", scale: 0 }, { x: 0, scale: 1 })
    }
  }, [tl]) // Add tl as a dependency to ensure proper execution

  return (
    <a
      href="https://api.whatsapp.com/send?phone=9818275115"
      className="cta fancy-btn z-100"
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
