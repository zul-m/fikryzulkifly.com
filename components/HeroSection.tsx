"use client";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="px-6 max-w-7xl mx-auto text-center items-center justify-center md:py-20"
    >
      <div className="flex flex-col pt-32 pb-16 md:py-32 md:flex-row md:text-left">
        <div className="my-auto md:w-3/5">
          <h1 className="md:py-14 font-bold text-3xl space-y-3 md:text-6xl md:space-y-5">
            <span className="leading-tight">
              Kamu perlukan khidmat konsultasi berkaitan
            </span>
            <br></br>
            <TypeAnimation
              sequence={["HARTANAH?", 1000, "SUBSALE?", 1000, "SEWAAN?", 1000]}
              wrapper="span"
              speed={40}
              style={{
                color: "#0d9488",
                display: "inline-block",
                fontSize: "1.5em",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg mt-7 md:mt-0 mb-8 md:text-justify md:text-xl">
            Hi, saya{" "}
            <span className="font-semibold text-teal-600">Fikry{""}</span>.
            Hubungi saya untuk khidmat ejen hartanah di Kuala Lumpur dan
            Selangor atau ikuti panduan jual beli hartanah.
          </p>
          <div className="space-y-3 md:space-y-0 md:space-x-5 flex flex-col md:flex-row">
            <Link
              to="contact"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Hubungi saya
            </Link>
            <Link
              to="projects"
              className="font-semibold px-6 py-3 border-2 border-teal-600 rounded shadow hover:bg-teal-700 hover:text-neutral-100"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Panduan jual beli hartanah
            </Link>
          </div>
        </div>
        <div className="mt-10 md:my-auto md:w-2/5 flex flex-column justify-center md:justify-end">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="md:mt-16 flex flex-row items-center text-center justify-center">
        <Link
          to="projects"
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
