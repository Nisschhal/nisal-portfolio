import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import Socials from "@/components/ui/socials"
import Link from "next/link"
import React from "react"
import { FaDownload } from "react-icons/fa"

export default function ResumeCard() {
  return (
    <Card classNames="md:h-full 2xl:h-fit" title="About Me">
      <div>
        <p className="text-md font-medium leading-relaxed">
          <span className="text-slate-400 block text-base">
            Hello! 👋 I'm Nischal Puri — Full Stack Developer | Builder of
            Scalable Solutions
          </span>
        </p>
        <p className="text-md font-medium leading-relaxed mt-4">
          Currently working as a Full Stack Developer & Team Lead at Neutorline
          (sister company of US-based Neutrosys.net), I specialize in developing
          secure, scalable systems including a healthcare Appointment Management
          Platform. 💻
        </p>
        <p className="text-md font-medium leading-relaxed mt-4">
          From e-commerce platforms like Ink Sprout 🛒 to blockchain-based
          e-voting systems 🔐, I've built products that solve real-world
          problems and offer great user experiences. I'm also passionate about
          open-source, UI/UX design, and mentoring junior developers. 🌱
        </p>
        <p className="text-md font-medium leading-relaxed mt-4">
          My mission is simple — to grow continuously 📈, collaborate with
          forward-thinking teams 🤝, and create meaningful tech that empowers
          people. Whether it’s building modern web apps or enhancing
          cybersecurity awareness, I’m always ready to dive in. 🚀
        </p>
      </div>

      {/* Optional: Signature */}
      {/* <div>
        <Image src="/signature.png" alt="Nischal Puri signature" />
      </div> */}

      {/* Socials and Resume download button */}
      <div className="flex items-center justify-between md:absolute md:bottom-2 lg:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
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
