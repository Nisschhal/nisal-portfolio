import ContactCard from "@/components/cards/contact/contactCard"
import Heading from "@/components/heading/heading"
import Card from "@/components/ui/card"
import React from "react"
import { FaPhoneVolume } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function ContactSetion() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />

      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 ">
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+977 - 981 827 5115"
              btnText="Call me"
            />
            <ContactCard
              title="Chat with me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="mrnischalpur@gmail.com"
              btnText="Email"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
