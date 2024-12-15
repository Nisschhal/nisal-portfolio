import { cn } from "@/lib/utils"

export default function GrainEffect() {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full",
        "before-content-none before:-top-40 before:-left-40 before:w-[calc(100%+20rem)] before:h-[calc(100%+20rem)]",
        "before:fixed before:bg-grain before:opacity-15 pointer-events-none before:animate-noisy-bg"
      )}
    ></div>
  )
}

// Add .before-content-none class to set content:"" in global css file
// .before-content-none::before {
//     content: "";
//   }

// add animation and keyframes in tailwind.config.ts for visual effect

//animation: {
//     "noisy-bg": "noise 1s steps( 2) infinite",
// },
// keyframes: {
//   noise: {
//     "0%": {
//       transform: "translate3d(0, 9rem, 0)",
//     },
//     "10%": {
//       transform: "translate3d(-1rem, -4rem, 0)",
//     },
//     "20%": {
//       transform: "translate3d(-8rem, 2rem, 0)",
//     },
//     "30%": {
//       transform: "translate3d(9rem, -9rem, 0)",
//     },
//     "40%": {
//       transform: "translate3d(-2rem, 7rem, 0)",
//     },
//     "50%": {
//       transform: "translate3d(-9rem, -4rem, 0)",
//     },
//     "60%": {
//       transform: "translate3d(2rem, 6rem, 0)",
//     },
//     "70%": {
//       transform: "translate3d(7rem, -8rem, 0)",
//     },
//     "80%": {
//       transform: "translate3d(-9rem, 1rem, 0)",
//     },
//     "90%": {
//       transform: "translate3d(6rem, -5rem, 0)",
//     },
//     to: {
//       transform: "translate3d(-7rem, 0, 0)",
//     },
//   },
// },
