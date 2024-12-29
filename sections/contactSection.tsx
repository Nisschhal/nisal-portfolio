import ContactCard from "@/components/cards/contact/contactCard"
import Heading from "@/components/heading/heading"
import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import Input from "@/components/ui/input"
import TextArea from "@/components/ui/text-area"
import React from "react"
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa"
import { MdEmail, MdSubject } from "react-icons/md"
import { SiMinutemailer } from "react-icons/si"

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
          {/* Right Side: Span-col-2 */}
          <div className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <Input
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input type="email" placeholder="Subject" icon={<MdSubject />} />
            </div>
            {/* Multiple Checkboxes */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-bold text-lg">
                  What do you want me to do?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Services */}
                </div>
              </div>
            </div>
            {/* Work Type Checkboxes */}
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-bold text-lg">
                  How do you like me to service you?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Services Option */}
                </div>
              </div>
            </div>
            {/* Descriptions : Text Area*/}
            <TextArea
              placeholder={"Tell me about your project"}
              icon={<FaProjectDiagram />}
            />
            {/* Send Button */}
            <div className="w-full flex justify-end">
              <Button classNames="w-44 py-3">
                Send <SiMinutemailer />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
