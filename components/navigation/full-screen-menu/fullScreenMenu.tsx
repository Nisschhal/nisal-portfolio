import { motion } from "framer-motion"
import { menuSlide } from "./animation"
import Curve from "./curve"
import Profile from "@/components/ui/profile"
import NavLink from "./navLink"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import MenuCard from "./menu-card"

export default function FullScreenMenu({
  tl,
  setOpen,
  open,
}: {
  open: boolean
  setOpen: (val: boolean) => void
  tl: gsap.core.Timeline
}) {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald "
    >
      {/* -------- Profile -------------  */}
      <div className="relative w-full pl-[5%]">
        <div className="absolute top-8">
          <Profile tl={tl} />
        </div>
      </div>
      {/* -------- Menu card -------------  */}
      <div className="absolute bottom-32 w-full lg:pl-[5%]">
        <div
          className="grid relative"
          style={{
            gridTemplateColumns: "1fr 500px",
          }}
        >
          {/* Row: 1st: 1fr */}
          <div className="pl-4 flex flex-col justify-end">
            <AnimatePresence>
              {navItems.map((navItem, index) => (
                <div key={index} onClick={() => setOpen(!open)}>
                  <NavLink item={{ ...navItem, index }} />
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Row: 2nd: 500px */}
          {/* Menu About Card */}
          <MenuCard open={open} setOpen={setOpen} />
        </div>
      </div>
      {/*Curve svg effect*/}

      {/* Footer Link */}
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <Link href={"/"}>Legal Notice</Link>
            <Link href={"/"}>404</Link>
            <Link href={"/"}>LegalStyle</Link>
          </div>
          {/* Middle */}
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/nischal-puri-a9041a165/"}
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/Mrnischalpuri"}
            >
              Facebook
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/mrnischalpuri/"}
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/mrnischalpuri/"}
            >
              Instagram
            </Link>
          </div>
          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link href={"/"}>©2025 | Nischal Puri</Link>
          </div>
        </div>
      </div>

      <Curve />
    </motion.div>
  )
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Featured",
    href: "/#featured",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
]
