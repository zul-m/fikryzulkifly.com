"use client";
import { FEATURES } from "@/styles/constants";
import SlideUp from "./SlideUp";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full text-center items-center justify-center"
    >
      <div className="bg-gradient-to-b from-cyan-900 from-90% w-full px-5 pt-32 md:pt-40 pb-80">
        <h1 className="max-w-7xl mx-auto text-start font-poppins font-bold text-4xl md:text-7xl">
          <span className="text-neutral-300 leading-tight">
            Kami menyediakan khidmat konsultasi berkaitan{" "}
          </span>
          <span className="font-playfair text-teal-400 underline underline-offset-[12px]">
            HARTANAH
          </span>
        </h1>
      </div>
      <SlideUp offset="-300px 0px -300px 0px">
        <ul className="max-w-7xl mx-auto px-8 lg:px-4 xl:px-0 font-inter -mt-56 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
        </ul>
      </SlideUp>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon?: JSX.Element;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="font-poppins tracking-wide rounded-lg w-full flex flex-col bg-teal-700 px-5 py-10">
      <div className="mx-auto">{icon}</div>
      <h2 className="text-xl text-yellow-400 mt-5">{title}</h2>
      <p className="mt-5 text-neutral-200">{description}</p>
    </li>
  );
};

export default HeroSection;
