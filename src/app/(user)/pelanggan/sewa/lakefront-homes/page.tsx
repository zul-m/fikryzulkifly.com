"use client";
import { listing } from "@/src/app/interface";
import { client } from "@/src/app/lib/sanity";
import { formatCurrency } from "@/src/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const pageContent = {
  project: {
    title: "Lakefront Homes",
    location: "Cyberjaya, Selangor",
    bedroom: "3",
    bathroom: "2",
    parking: "2",
    size: "1010",
  },
  facilities: [
    { name: "Kawasan barbeku" },
    { name: "Kedai makan" },
    { name: "Kolam renang" },
    { name: "Mini Mart" },
    { name: "Taman permainan" },
    { name: "Trek joging" },
    { name: "7 Eleven" },
  ],
  gallery: [
    { img: "/sewa/lakefront-homes/01.png", name: "Lakefront Homes 1" },
    { img: "/sewa/lakefront-homes/02.jpg", name: "Lakefront Homes 2" },
    { img: "/sewa/lakefront-homes/03.jpeg", name: "Lakefront Homes 3" },
    { img: "/sewa/lakefront-homes/04.jpeg", name: "Lakefront Homes 4" },
    { img: "/sewa/lakefront-homes/05.jpeg", name: "Lakefront Homes 5" },
    { img: "/sewa/lakefront-homes/06.jpeg", name: "Lakefront Homes 6" },
    { img: "/sewa/lakefront-homes/07.jpeg", name: "Lakefront Homes 7" },
    { img: "/sewa/lakefront-homes/08.jpeg", name: "Lakefront Homes 8" },
    { img: "/sewa/lakefront-homes/09.jpeg", name: "Lakefront Homes 9" },
    { img: "/sewa/lakefront-homes/10.jpeg", name: "Lakefront Homes 10" },
    { img: "/sewa/lakefront-homes/11.jpeg", name: "Lakefront Homes 11" },
    { img: "/sewa/lakefront-homes/12.jpeg", name: "Lakefront Homes 12" },
    { img: "/sewa/lakefront-homes/13.jpeg", name: "Lakefront Homes 13" },
  ],
};

async function getData() {
  const query = `*[_type == "listing" && project -> name == "Lakefront Homes"] | order(_createdAt desc) {
  _id,
    "imageurl": hero.asset -> url,
    installment,
    link
}`;

  const data = await client.fetch(query);

  return data;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default async function page() {
  const data: listing[] = await getData();

  SwiperCore.use([Autoplay, Pagination]);

  return (
    <>
      <motion.section
        id="project"
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
        className="container pt-32 pb-20 mx-auto lg:py-44"
      >
        <div className="max-w-4xl mx-auto font-poppins">
          <div className="max-w-4xl px-4 mx-auto mb-16 font-bold text-center lg:mb-28">
            <h1 className="text-center text-slate-900 text-4xl/none lg:text-6xl/none">
              {pageContent.project.title}
            </h1>
            <p className="mt-10 text-slate-500">
              <span className="inline-flex space-x-3">
                <span>{pageContent.project.location}</span>
                <span>•</span>
                <span>Sewa</span>
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-2">
            <div className="mb-16">
              <Swiper
                {...{
                  autoplay: { pauseOnMouseEnter: true },
                  pagination: { clickable: true, dynamicBullets: true },
                  style: {
                    "--swiper-pagination-color": "#0f766e",
                  },
                }}
              >
                {pageContent.gallery.map((images, idx) => (
                  <SwiperSlide className="w-full" key={idx}>
                    <div className="w-full">
                      <Image
                        src={images.img}
                        alt={images.name}
                        width={720}
                        height={810}
                        className="mx-auto object-cover object-center aspect-[8/9]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <motion.div
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
              className="px-4 mb-16 lg:px-0 text-slate-900"
            >
              <h2 className="mb-10 font-medium tracking-wide text-2xl/none">
                Butiran Hartanah
              </h2>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                      BILIK TIDUR
                    </td>
                    <td className="p-2 border border-slate-400">
                      {pageContent.project.bedroom}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                      BILIK AIR
                    </td>
                    <td className="p-2 border border-slate-400">
                      {pageContent.project.bathroom}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                      PARKIR
                    </td>
                    <td className="p-2 border border-slate-400">
                      {pageContent.project.parking}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                      SAIZ
                    </td>
                    <td className="p-2 border border-slate-400">
                      {pageContent.project.size} kps
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                      KEMUDAHAN
                    </td>
                    <td className="p-2 border border-slate-400">
                      {pageContent.facilities.map((facility, idx) => (
                        <li key={idx}>
                          <ul className="my-2">{facility.name}</ul>
                        </li>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="px-5 lg:px-0"
          >
            <h2 className="mb-10 text-2xl font-medium tracking-wide">
              Untuk Disewa
            </h2>
            <div className="grid grid-cols-1 mb-16 gap-x-6 gap-y-10 xl:gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
              {data.map((listing) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  key={listing._id}
                  className="relative border rounded-md shadow-lg group hover:shadow-xl"
                >
                  <Link href={listing.link}>
                    <div className="overflow-hidden rounded-t-md">
                      <Image
                        src={listing.imageurl}
                        alt="fikryzulkilfy.com"
                        width={300}
                        height={300}
                        className="object-cover object-center h-[300px] w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="px-2 py-4 text-center">
                      <span className="block text-gray-700">
                        {formatCurrency(listing.installment)} /bulan
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
