import ContactCard from "@/components/cards/contact/contactCard"
import Heading from "@/components/heading/heading"
import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import Input from "@/components/ui/input"
import SelectInput from "@/components/ui/select-input"
import TextArea from "@/components/ui/text-area"
import React, { useState } from "react"
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa"
import { MdEmail, MdSubject } from "react-icons/md"
import { SiMinutemailer } from "react-icons/si"

export default function ContactSetion() {
  const [services, setServices] = useState<string[]>([])
  const [engagement, setEngagement] = useState<string[]>([])
  const [arrangement, setArrangement] = useState<string[]>([])
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />

      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 ">
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call Me at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+977 - 981 827 5115"
              btnText="Call Now"
            />
            <ContactCard
              title="Chat with Me"
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
              <div className="space-y-4">
                <h1 className="font-bold text-lg">
                  What services are you looking for?
                </h1>
                <div className="flex flex-wrap items-center md:justify-between  mb-4 gap-8">
                  {/* Services */}
                  {servicesOptions.map((service) => (
                    <SelectInput
                      key={service.id}
                      id={service.id}
                      type={"checkbox"}
                      text={service.text}
                      selectedOptions={services}
                      setSelectedOptions={setServices}
                      allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Work Engagement Type Checkboxes */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <h1 className="font-bold text-lg">
                  What is your preferred work engagement?{" "}
                </h1>
                <div className="flex flex-wrap items-center md:justify-between mb-4 gap-8">
                  {/* Services Option */}
                  {engagementOptions.map((option) => (
                    <SelectInput
                      id={option.id}
                      type={"radio"}
                      text={option.text}
                      selectedOptions={engagement}
                      setSelectedOptions={setEngagement}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Work Arrangement Type Checkboxes */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <h1 className="font-bold text-lg">
                  What is your preferred work engagement?
                </h1>
                <div className="flex flex-wrap items-center md:justify-between mb-4 gap-8">
                  {/* Services Option */}
                  {arrangementOptions.map((option) => (
                    <SelectInput
                      id={option.id}
                      type={"radio"}
                      text={option.text}
                      selectedOptions={arrangement}
                      setSelectedOptions={setArrangement}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Descriptions : Text Area*/}
            <TextArea
              placeholder={"Tell me more about your project and goals ..."}
              icon={<FaProjectDiagram />}
            />
            {/* Send Button */}
            <div className="w-full flex justify-end">
              <Button classNames="!w-44 !py-3">
                Send <SiMinutemailer />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

const servicesOptions = [
  { id: "Frontend", text: "Frontend 💻" },
  { id: "Backend", text: "Backend 🔧" },
  { id: "Fullstack", text: "Fullstack 🌐" },
  { id: "UI/UX", text: "UI/UX 🎨" },
  { id: "Teaching", text: "Teaching 👩‍🏫" },
]

const engagementOptions = [
  { id: "Full-Time", text: "Full-Time 🕒" },
  { id: "Part-Time", text: "Part-Time ⏳" },
  { id: "Freelance", text: "Freelance 💼" },
]

const arrangementOptions = [
  { id: "In-Office", text: "In-Office 🏢" },
  { id: "Remote", text: "Remote 🌍" },
  { id: "Hybrid", text: "Hybrid 🔄" },
]
