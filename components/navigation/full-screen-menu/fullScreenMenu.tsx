import { motion } from "framer-motion"
import { menuSlide } from "./animation"
import Curve from "./curve"
import Profile from "@/components/ui/profile"
import NavLink from "./navLink"
import { AnimatePresence } from "framer-motion"

export default function FullScreenMenu() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald "
    >
      {/* Profile  */}
      <div className="relative w-full max-w-[95%] mx-auto">
        <div className="absolute top-8">
          <Profile />
        </div>
      </div>
      {/* Menu card */}
      <div className="absolute bottom-32 w-full lg:pl-[5%]">
        <div
          className="grid relative"
          style={{
            gridTemplateColumns: "1fr 500px",
          }}
        >
          <div className="pl-4 flex flex-col justify-end">
            <AnimatePresence>
              {navItems.map((navItem, index) => (
                <NavLink key={index} item={{ ...navItem, index }} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/*Curve svg effect*/}
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
