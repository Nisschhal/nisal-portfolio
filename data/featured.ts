import Carhive from "@/public/assets/images/projects/carhive.png"
import Solemate from "@/public/assets/images/projects/solemate.png"
import TailSprout from "@/public/assets/images/projects/tailsprout.png"
import Sage from "@/public/assets/images/projects/sage-dev-craft.png"
import SageDark from "@/public/assets/images/projects/sage-dev-craft-dark.png"
import NextAuth from "@/public/assets/images/projects/next-auth.png"
import InkSprout from "@/public/assets/images/projects/ink-sprout.png"
import BookWiz from "@/public/assets/images/projects/bookwiz.png"

interface Featured {
  title: string
  tag: string
  credits: string
  image: string
  link: string
}

const featuredData: Featured[] = [
  {
    title: "Ink Sprout",
    tag: "Jan 22 2025",
    image: InkSprout.src,
    credits: "Nischal Puri",
    link: "https://ink-sprout-v2-nischal.vercel.app",
  },
  {
    title: "Book Wiz (Library)",
    image: BookWiz.src,
    tag: "Jan 25 2025",
    credits: "Nischal Puri",
    link: "https://uni-book-wiz.vercel.app",
  },

  {
    title: "Car Hive",
    tag: "Oct 14 2024",
    image: Carhive.src,
    credits: "Nischal Puri",
    link: "https://carhive-dev-nischal.vercel.app",
  },
  {
    title: "Sole Mate",
    image: Solemate.src,
    tag: "Nov 9 2024",
    credits: "Nischal Puri",
    link: "https://sole-mate-dev-nisal.vercel.app",
  },

  {
    title: "Tail Sprout",
    image: TailSprout.src,
    tag: "Jan 1 2025",
    credits: "Nischal Puri",
    link: "https://tail-sprout-nisal-dev.vercel.app",
  },
  {
    title: "Next Auth",
    tag: "Jan 11 2025",
    image: NextAuth.src,
    credits: "Nischal Puri",
    link: "https://next-auth-nisschal.vercel.app",
  },
  {
    title: "Sage Dev Craft",
    image: Sage.src,
    tag: "Jan 15 2025",
    credits: "Nischal Puri",
    link: "https://sage-dev-craft.vercel.app",
  },
  {
    title: "Sage Dev Craft Dark",
    image: SageDark.src,
    tag: "Jan 13 2025",
    credits: "Nischal Puri",
    link: "https://nischal-sage-dev-craft-dark.vercel.app",
  },
]
// const featuredData: Featured[] = [
//   {
//     title: "Okarys",
//     logo: "",
//     tag: "Feb 2024",
//     video:
//       "https://cdn.dribbble.com/userupload/3743863/file/original-ed64ce215ecf5f86ead7fedaca82c84c.mp4",
//     credits: "Julia Dmitrievna",
//     link: "https://dribbble.com/shots/19587956-Okarys-Brand-Identity",
//   },
//   {
//     title: "Social Media Video App",
//     logo: "",
//     tag: "Dec 2023",
//     video:
//       "https://cdn.dribbble.com/userupload/13004443/file/original-abd310aef7e5503eb49ec96040be757d.mp4",
//     credits: "Julia Dmitrievna",
//     link: "https://dribbble.com/shots/23626219-Social-Media-Video-App",
//   },
//   {
//     title: "Frontline Creative Studio Website",
//     logo: "",
//     tag: "Sep 2023",
//     video:
//       "https://cdn.dribbble.com/userupload/12997464/file/original-a24f5765b5ac067c91523d94848da540.mp4",
//     credits: "Mariusz Mitkow",
//     link: "https://dribbble.com/shots/23623908-Frontline-Creative-Studio-Website",
//   },
//   {
//     title: "Cyborg League Arena",
//     logo: "",
//     tag: "Jan 2022",
//     video:
//       "https://cdn.dribbble.com/userupload/12878467/file/original-ed8b35e23f89e36d2aaaab37fc965808.mp4",
//     credits: "Sok Studio",
//     link: "https://dribbble.com/shots/23582749-Cyborg-League-Arena-Mobile-Game-Landing-Page",
//   },
// ]

export default featuredData
