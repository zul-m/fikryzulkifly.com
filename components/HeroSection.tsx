"use client";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="mx-auto max-w-6xl text-center items-center justify-center md:py-20"
    >
      <h1 className="py-20 md:py-14 px-4 font-bold text-2xl mt-10 md:text-5xl space-y-5">
        <span>Anda perlukan khidmat konsultasi berkaitan</span>
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
      <div className="bg-gray-300 text-neutral-900 md:rounded-2xl shadow-2xl flex flex-col px-16 py-20 md:flex-row md:text-left">
        <div className="mx-auto md:w-2/5">
          <Image
            className="rounded-full shadow-2xl"
            src="/headshot.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="my-auto md:w-3/5">
          <h1 className="font-bold text-3xl leading-normal my-6 md:text-6xl md:mt-0">
            Hi, saya Fikry.
          </h1>
          <p className="text-lg mt-5 mb-8 md:text-justify md:text-xl">
            Saya seorang{" "}
            <span className="font-semibold text-teal-700">
              perunding hartanah{""}
            </span>
            . Ikuti panduan jual beli hartanah atau hubungi saya untuk khidmat
            ejen hartanah di Kuala Lumpur dan Selangor.
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
            Hubungi saya
          </Link>
        </div>
      </div>
      <div className="mt-16 flex flex-row items-center text-center justify-center ">
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
