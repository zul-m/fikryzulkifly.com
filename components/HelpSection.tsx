"use client";
import { FEATURES } from "@/styles/constants";
import Image from "next/image";
import SlideUp from "./SlideUp";

const Features = () => {
  return (
    <section
      id="help"
      className="flex-col flex items-center justify-center overflow-hidden py-24"
    >
      <div className="mx-auto max-w-[1440px] lg:space-x-10 px-6 w-full flex">
        <div className="flex flex-1 my-auto">
          <SlideUp offset="-300px 0px -300px 0px">
            <Image
              src="/help.jpg"
              alt=""
              width={4480}
              height={5600}
              className="w-[80%] h-auto z-10 rotate-[15deg] hidden lg:flex rounded-lg shadow-xl mx-auto"
            />
          </SlideUp>
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <h2 className="font-playfair text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%]">
            Bagaimana kami boleh{" "}
            <span className="text-teal-600">bantu anda</span>
          </h2>
          <ul className="font-inter mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
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
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 bg-teal-700">{icon}</div>
      <h2 className="text-[20px] font-[700] lg:text-[32px] lg:font-[700] lg:leading-[120%] mt-5 capitalize">
        {title}
      </h2>
      <p className="text-[16px] font-[400] mt-5 text-gray-600 lg:mt-[30px]">
        {description}
      </p>
    </li>
  );
};

export default Features;
