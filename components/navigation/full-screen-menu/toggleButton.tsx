import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export default function ToggleButton({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: any
}) {
  const [clickCount, setClickCount] = useState<number>(0)
  const clicked = () => {
    if (clickCount === 0) {
      setClickCount(1)
    }
  }

  return (
    <button
      onClick={() => {
        setOpen((prev: any) => !prev)
        if (clickCount === 0) {
          setClickCount(1)
        }
      }}
      className={cn(
        "fixed right-4  m-5 z-50 w-16 h-16 rounded-full bg-[#323E56] cursor-pointer transform scale-[0.5]  hover:scale-100 transition-transform duration-300",
        clickCount === 0 && "animate-pulse"
      )}
    >
      <div className="relative flex items-center justify-center ">
        <div className="flex flex-col gap-y-2 w-[30px] transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={cn(
              "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "bg-white h-[2px] w-3 transform transition-all duration-300 origin-left delay-150",
              "hover:w-7",
              {
                "translate-x-10": open,
              }
            )}
          />
          <div
            className={cn(
              "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ",
              {
                "translate-x-0 w-12": open,
              }
            )}
          >
            <div
              className={cn(
                "absolute bg-white h-[2px] w-7 transform transition-all duration-500 rotate-0 delay-300 ",
                {
                  "rotate-45": open,
                }
              )}
            />
            <div
              className={cn(
                "absolute bg-white h-[2px] w-7 transform transition-all duration-500 -rotate-0 delay-300 ",
                {
                  "-rotate-45": open,
                }
              )}
            />
          </div>
        </div>
      </div>
    </button>
  )
}
