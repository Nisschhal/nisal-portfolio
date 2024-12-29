import Image from "next/image"
import myImage from "@/public/assets/images/myImage.jpg"
import me15 from "@/public/assets/gallery/me15.jpg"

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
      {/* Photo */}
      <div className="relative w-[100px] rounded-full h-[100px] flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
        <Image
          src={me15}
          alt="Nischal Puri"
          className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover"
        />
        {/* {Online Dot} */}
        <div className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
      </div>
      {/* Name */}
      <div className="relative">
        <p className="text-3xl font-medium">NISCHAL PURI</p>
        <p className="opacity-50 text-sm absolute top-[25px] ">
          <span className="text-lg font-thin">(</span>Software Essentialists
          <span className="text-lg font-thin">)</span>
        </p>
      </div>
    </div>
  )
}
