import { HTMLAttributes } from "react";

declare module "swiper/react" {
  interface SwiperProps extends HTMLAttributes<HTMLDivElement> {
    style?: React.CSSProperties & {
      "--swiper-pagination-color"?: string;
    };
    speed?: number;
    spaceBetween?: number;
    onSlideChange?: (swiper: any) => void;
    // Add other properties you need here
  }

  interface SwiperSlideProps extends HTMLAttributes<HTMLDivElement> {
    // Add any additional properties for SwiperSlide if needed
  }

  export const Swiper: React.FC<SwiperProps>;
  export const SwiperSlide: React.FC<SwiperSlideProps>;
}
