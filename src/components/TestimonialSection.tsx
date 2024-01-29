"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialContent = {
  heading: {
    title: "Apa yang pelanggan kami katakan",
    subtitle: "Testimonial",
  },
  testimonials: [
    {
      avatar: "/testimonial/atyn-nadya.png",
      name: "Atyn Nadya",
      rating: "⭐⭐⭐⭐⭐",
      quote:
        "Saya dpt sewa rumah Lakefront Homes thanks to him. Thank you so much for your help and support. very comitted REN in Cyberjaya 👍👍 …",
    },
    {
      avatar: "/testimonial/adilla-azhar.png",
      name: "Adilla Azhar",
      rating: "⭐⭐⭐⭐⭐",
      quote: "Very easy agent!",
    },
    {
      avatar: "/testimonial/zulfikar-m.jpeg",
      name: "Zulfikar M",
      rating: "⭐⭐⭐⭐",
      quote:
        "Fikry rajin melayan customer-customer dia. Idola dia Financial Faiz!",
    },
  ],
};

const TestimonialSection = () => {
  SwiperCore.use([Pagination]);

  return (
    <section id="testimonial" className="py-16 lg:py-32">
      <div className="container px-4 mx-auto font-poppins">
        <div className="flex justify-center lg:mb-20">
          <div className="flex items-center w-full gap-0 font-bold md:w-8/12">
            <div className="w-auto max-w-full mx-auto mb-16 text-center md:w-screen md:max-w-2xl">
              {testimonialContent.heading.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-sm mb-5 inline-block text-teal-600"
                >
                  {testimonialContent.heading.subtitle}
                </motion.span>
              )}
              {testimonialContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl"
                >
                  {testimonialContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className="justify-start lg:flex lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.9,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="items-center w-full gap-0 lg:w-10/12 lg:flex"
          >
            <Swiper
              {...{
                slidesPerView: 1,
                breakpoints: {
                  640: { slidesPerView: 2 },
                  1400: { slidesPerView: 3 },
                },
                speed: 700,
                spaceBetween: 30,
                pagination: {
                  clickable: true,
                  dynamicBullets: true,
                },
                style: {
                  "--swiper-pagination-color": "#0f766e",
                },
              }}
              className="h-[350px]"
            >
              {testimonialContent.testimonials.map((person, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-md p-8 min-h-[310px] bg-neutral-100">
                    <div className="flex items-center p-0 mb-4 gap-x-4">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt="fikryzulkifly.com"
                        priority
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <strong>{person.name}</strong>
                        <span>{person.rating}</span>
                      </div>
                    </div>
                    <blockquote className="text-gray-500">
                      <span className="pt-8 opacity-80 text-[100px] leading-[0] block text-teal-700">
                        &ldquo;
                      </span>
                      {person.quote}
                    </blockquote>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
