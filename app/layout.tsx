import type { Metadata } from "next"
import { Bricolage_Grotesque, Oswald } from "next/font/google"
import { cn } from "clsx"
import "./globals.css"

// Primary Font
const mainFont = Bricolage_Grotesque({ subsets: ["latin"] })

// Secondary Font
const oswarldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

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
      <body className={cn(mainFont.className, oswarldFont.variable)}>
        {children}
      </body>
    </html>
  )
}
