import type { Metadata } from "next"
import { Bricolage_Grotesque, Oswald } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import GrainEffect from "@/components/visual-effects/grain-effect"
import Cursor from "@/components/cursor/cursor"

// Primary Font
const mainFont = Bricolage_Grotesque({ subsets: ["latin"] })

// Secondary Font
const oswarldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

// Accent Font
const pixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
})

export const metadata: Metadata = {
  title: "Nischal Puri | Portfolio",
  description: "Nischal Puri Official Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          mainFont.className,
          oswarldFont.variable,
          pixelFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  )
}
