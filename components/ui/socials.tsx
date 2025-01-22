import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { LiaLinkedinIn } from "react-icons/lia"
import Button from "./button"
import { BsInstagram } from "react-icons/bs"

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3 ">
      {socials.map((social, i) => (
        <div className="group" key={i}>
          <Button
            link={social.link}
            classNames="group-hover:bg-white transition-bg duration-300"
            isIcon
          >
            {/* <span className="w-7 h-7 group-hover:invert group-hover:scale-110 transition-all duration-300 grid place-items-center"> */}
            <span className="group-hover:invert group-hover:scale-110 transition-all duration-300">
              {social.icon}
            </span>
            {/* </
            span> */}
          </Button>
        </div>
      ))}
    </div>
  )
}

const socials = [
  {
    icon: <FaFacebookF className="w-4 h-4" />,
    link: "https://www.facebook.com/Mrnischalpuri",
    username: "Nischal Puri",
  },
  {
    icon: <BsInstagram className="w-4 h-4" />,
    link: "https://www.instagram.com/mrnischalpuri/",
    username: "Nischal Puri",
  },
  {
    icon: <LiaLinkedinIn className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/nischal-puri-a9041a165/",
    username: "Nischal Puri",
  },
]
