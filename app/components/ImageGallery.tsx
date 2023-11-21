"use client";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../lib/sanity";

interface iAppProps {
  images: any;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="pt-28 grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div
            key={idx}
            className="overflow-hidden border shadow-md rounded-lg"
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt=""
              className="object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="mb-auto mx-auto relative overflow-hidden border shadow-md rounded-lg lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt=""
          width={500}
          height={500}
          className="object-cover object-center"
        />
        {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Jualan dibuka
        </span> */}
      </div>
    </div>
  );
}
