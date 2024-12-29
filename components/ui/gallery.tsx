// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import { Autoplay, Pagination } from "swiper/modules"
import { galleryImages } from "@/data"
import Image from "next/image"

export default function Gallery() {
  return (
    <div className="h-[550px] sm:h-[650px] md:h-[750px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px] w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 2500 }}
        className="mySwiper rounded-2xl"
      >
        {galleryImages.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.img}
              alt="nischal"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
