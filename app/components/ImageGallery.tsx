"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface iAppProps {
  images: any;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function ImageGallery({ images }: iAppProps) {
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <div className="overflow-hidden">
      <Swiper
        autoplay={{ pauseOnMouseEnter: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        style={{
          "--swiper-pagination-color": "#0f766e",
          "--swiper-pagination-bullet-inactive-color": "#262626",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {images.map((image: any, idx: any) => (
          <SwiperSlide key={idx}>
            <div className="w-full">
              <Image
                src={urlFor(image).url()}
                width={500}
                height={500}
                alt=""
                className="object-cover mx-auto aspect-square sm:rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
