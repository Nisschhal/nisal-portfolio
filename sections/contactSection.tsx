import ContactCard from "@/components/cards/contact/contactCard"
import Heading from "@/components/heading/heading"
import Button from "@/components/ui/button"
import Card from "@/components/ui/card"
import Input from "@/components/ui/input"
import SelectInput from "@/components/ui/select-input"
import TextArea from "@/components/ui/text-area"
import React, { FormEvent, useRef, useState } from "react"
import {
  FaPhoneVolume,
  FaProjectDiagram,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa"
import { MdEmail, MdSubject } from "react-icons/md"
import { SiMinutemailer } from "react-icons/si"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
export default function ContactSetion() {
  const [services, setServices] = useState<string[]>([])
  const [engagement, setEngagement] = useState<string[]>([])
  const [arrangement, setArrangement] = useState<string[]>([])

  const formRef = useRef<HTMLFormElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_KEY!
      )
      .then(
        (res) => {
          if (res.text === "OK") {
            toast.success("Message Sent! 👌🏻")
          }
          setLoading(false)
        },
        (error) => {
          setLoading(false)
          toast.success("Error Sending Message! 🙈")
        }
      )
  }
  return (
    <section id="contact" className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />

      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 ">
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call Me at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+977 - 981 827 5115"
              btnText="Call Now"
              btnIcon={<FaWhatsapp />}
            />
            <ContactCard
              title="Chat with Me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="mrnischalpur@gmail.com"
              btnText="Email"
              btnIcon={<SiMinutemailer />}
            />
          </div>
          {/* Right Side: Span-col-2 */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                icon={<MdSubject />}
              />
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
                      key={option.id}
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
                      key={option.id}
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
              name="message"
              placeholder={"Tell me more about your project and goals ..."}
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              {/* Send Button */}
              <div onClick={() => btnRef.current?.click()}>
                <Button classNames="!w-44 !py-3">
                  {loading ? "Sending..." : "Send"} <SiMinutemailer />
                </Button>
              </div>
              {/* Hidden form input and submit button to connect to form and button */}
              <div className="hidden">
                <input
                  type="text"
                  name="services"
                  value={services.join("|")}
                  hidden
                />
                <input
                  type="text"
                  name="engagement"
                  value={engagement}
                  hidden
                />
                <input
                  type="text"
                  name="arrangement"
                  value={arrangement}
                  hidden
                />
              </div>
              <button type="submit" ref={btnRef} hidden>
                Send
              </button>
            </div>
          </form>
        </div>
      </Card>
    </section>
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
