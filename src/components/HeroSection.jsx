"use client"; // Required for Swiper in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../public/Food/food-1.jpg";
import img2 from "../../public/Food/food-2.jpg";
import img3 from "../../public/Food/food-3.jpg";
import img4 from "../../public/Food/food-4.jpg";
import img5 from "../../public/Food/food-5.jpg";

const images = [img1, img2, img3, img4, img5];

const HeroSection = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-[700px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Image
              src={img}
              alt={`Food ${index + 1}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
