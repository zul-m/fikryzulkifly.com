"use client";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="mx-auto max-w-5xl flex flex-col text-center items-center justify-center mt-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
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
          <h1 className="font-bold text-4xl leading-normal md:leading-normal my-10 md:text-6xl md:mt-0">
            <span>Konsultasi berkaitan</span>
            <br></br>
            <TypeAnimation
              sequence={["SUBSALE", 1000, "PROJEK BARU", 1000, "SEWAAN", 1000]}
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 250 }}
              style={{
                color: "#0d9488",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg mt-5 mb-8 md:text-2xl"></p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Hubungi saya
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
