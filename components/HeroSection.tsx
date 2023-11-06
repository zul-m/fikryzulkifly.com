"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-2/5">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="my-auto md:w-3/5">
          <h1 className="font-bold text-4xl mt-10 md:text-5xl md:mt-0">
            SELAMAT DATANG
          </h1>
          <p className="text-lg mt-5 mb-8 md:text-2xl">
          Perlukan khidmat konsultasi berkaitan hartanah?
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
