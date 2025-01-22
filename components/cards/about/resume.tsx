import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import Socials from "@/components/ui/socials"
import Link from "next/link"
import React from "react"
import { FaDownload } from "react-icons/fa"
export default function ResumeCard() {
  return (
    <Card classNames="md:h-full 2xl:h-fit" title="Experiences">
      <div>
        <p className="text-md  font-medium leading-relaxed">
          <span className="text-slate-400 block text-base ">
            Error: 404 Not Found! 🚫📄
          </span>
        </p>
        <p className="text-md  font-medium leading-relaxed mt-4">
          However, I have hands-on experience working on various projects that
          showcase my passion for full-stack development. 💻✨ From managing
          e-commerce systems 🛒📊 to designing responsive landing pages 🌐📱, I
          have actively honed my technical skills and problem-solving abilities.
          🧩🔧
        </p>
        <p className="text-md  font-medium leading-relaxed mt-4">
          I’m constantly learning 📚 and evolving 🚀 to meet the demands of a
          fast-paced digital world. 🌍 My goal is to collaborate with
          forward-thinking teams 🤝 where I can grow 🌱, contribute
          meaningfully, and create impactful software solutions that enhance
          user experiences. 🎯💡
        </p>
      </div>

      {/* Signature */}
      <div className="">
        {/* <Image src={} alt="nischal puri signature" /> */}
      </div>
      {/* Socials and Resume download btn */}
      <div className="flex items-center justify-between md:absolute md:bottom-2 lg:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* <div className="flex items-center justify-between "> */}
        {/* Socials */}
        <Socials />
        <Link
          target="_blank"
          href="./Nischal_Resume.pdf"
          className="group duration-300"
        >
          <Button classNames="group-hover:bg-white transition-bg duration-300">
            <div className="flex gap-2 group-hover:invert transition-all dur">
              <FaDownload />
              Resume
            </div>
          </Button>
        </Link>
      </div>
    </Card>
  )
}
