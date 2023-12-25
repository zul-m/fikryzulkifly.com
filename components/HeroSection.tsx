"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Link } from "react-scroll/modules";

const heroContent = {
  intro: {
    title: "Ingin menjual atau menyewakan hartanah anda?",
    subtitle: "Selamat datang",
    description:
      "Hubungi kami untuk khidmat ejen hartanah di Kuala Lumpur dan Selangor atau ikuti panduan jual/sewa rumah.",
    btn: {
      href: "contact",
      label: "Hubungi kami",
    },
  },
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imageScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-0 lg:pb-10" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-[80vh] items-center justify-between">
          <div className="lg:w-4/12 z-[3] relative font-poppins font-bold">
            {heroContent.intro.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[13.5px] mb-5 inline-block text-teal-600"
              >
                {heroContent.intro.subtitle}
              </motion.span>
            )}
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8"
              >
                {heroContent.intro.title}
              </motion.h1>
            )}
            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="tracking-wide leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-5 lg:mb-16"
              >
                {heroContent.intro.description}
              </motion.p>
            )}
            {heroContent.intro.btn.label && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  to={heroContent.intro.btn.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={2000}
                  className="transition-all duration-300 ease-in-out cursor-default text-[11.5px] tracking-[2px] font-bold uppercase rounded-md mb-10 lg:mb-0 bg-teal-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-teal-600 hover:shadow-2xl"
                >
                  {heroContent.intro.btn.label}
                </Link>
              </motion.p>
            )}
          </div>
          <div className="lg:w-7/12 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              style={{ y: imageScroll1 }}
              className="z-[2] relative bg-cover bg-center"
            >
              <Image
                src="/hero-img.jpg"
                width={744}
                height={885}
                alt=""
                className="rounded-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              style={{ y: imageScroll2 }}
              className="hidden lg:flex absolute bottom-0 lg:bottom-[200px] -left-[100px] z-[1]"
            >
              <img src="/dots.svg" alt="" className="w-64" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
