"use client";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
} from "@vis.gl/react-google-maps";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { SiGoogleforms } from "react-icons/si";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const pageContent = {
  project: {
    title: "RUMAWIP J Satine",
    date: "2024-01-03",
    image: "/project/j-satine/hero.jpg",
    category: "Projek Baru",
    location: "Setapak, Wangsa Maju, KL",
    map: "https://www.google.com/maps/@3.202162,101.726097,14z?hl=en-US&entry=ttu",
    year: "2027",
    developer: "Platinum Victory Sdn. Bhd.",
    price: "RM 300,000",
  },
  gallery: [
    {
      img: "/project/j-satine/gallery/games-room.PNG",
      name: "Games room",
    },
    { img: "/project/j-satine/gallery/Gym.PNG", name: "Gym" },
    { img: "/project/j-satine/gallery/Kolam.PNG", name: "Kolam" },
    { img: "/project/j-satine/gallery/Laman.PNG", name: "Laman" },
    { img: "/project/j-satine/gallery/Lobby.PNG", name: "Lobby" },
    { img: "/project/j-satine/gallery/shoplot.PNG", name: "Shoplot" },
  ],
  contact: {
    title: "Miliki Rumah Impian, Hari Ini",
    subtitle: "Semak Kelayakan",
    description:
      "Berminat dengan projek ini? Biar kami bantu anda miliki rumah impian!",
  },
};

const page = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState<boolean | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean | null>(null);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setIsEnd(sliderRef.current.swiper.isEnd);
      setIsBeginning(sliderRef.current.swiper.isBeginning);
    }
  }, [slideIndex]);

  const prevHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  }, [sliderRef]);

  const nextHandler = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  }, [sliderRef]);

  const position = { lat: 3.202162027359009, lng: 101.7260971069336 };
  const [open, setOpen] = useState(false);

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
        className="container px-4 pt-32 pb-20 mx-auto lg:py-44"
      >
        <div className="max-w-4xl mx-auto font-poppins">
          <div className="max-w-4xl mx-auto mb-16 font-bold text-center">
            <h1 className="text-center text-slate-900 text-4xl/none lg:text-6xl/none">
              {pageContent.project.title}
            </h1>
            <p className="mt-10 text-slate-500">
              <span className="inline-flex space-x-3">
                <span>
                  {format(parseISO(pageContent.project.date), "d LLL, yyyy")}
                </span>
                <span>•</span>
                <span>{pageContent.project.category}</span>
              </span>
            </p>
          </div>
          <div className="mb-16">
            <Image
              src={pageContent.project.image}
              width={1065}
              height={644}
              className="object-cover object-top"
              alt={pageContent.project.title}
            />
          </div>
          <article className="max-w-2xl mx-auto">
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
              className="max-w-2xl mx-auto mb-16"
            >
              <div className="justify-between hidden sm:flex">
                <div className="relative pl-3 border-l border-gray-200 before:content-[''] before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-teal-600">
                  <span className="block text-gray-400">Pemaju</span>
                  <span>{pageContent.project.developer}</span>
                </div>
                <div className="relative pl-3 border-l border-gray-200 before:content-[''] before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-teal-600">
                  <span className="block text-gray-400">Harga</span>
                  <span>{pageContent.project.price}</span>
                </div>
                <div className="relative pl-3 border-l border-gray-200 before:content-[''] before:top-0 before:-left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-teal-600">
                  <span className="block text-gray-400">Tahun Siap</span>
                  <span>{pageContent.project.year}</span>
                </div>
              </div>
            </motion.div>
            <div className="text-slate-900">
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
              >
                <p className="mb-10">
                  Sebuah kondominium 44 tingkat dengan 4 blok (A, B, C, D) dan
                  jumlah unit sebanyak 3600 unit. Setiap tingkat memiliki 22
                  hingga 30 unit dengan 7 hingga 10 lif untuk setiap blok.
                  Kemudahan kondominium ini meliputi unit seluas 800 kaki
                  persegi, dilengkapi dengan 3 bilik tidur, 2 bilik air, 1
                  beranda, dan 1 tempat letak kereta.
                </p>
                <p className="mb-16">
                  Projek ini merupakan projek pembangunan yang digabung dengan
                  kedai di bahagian bawah, dan berkategori komersial di bawah
                  Akta Pembangunan Perumahan, atau Housing Development Act
                  (HDA). RUMAWIP J Satine ini terletak di Wangsa Maju,
                  berdekatan dengan NSK dan Giant Hypermarket, serta mudah
                  diakses melalui Jalan Genting Klang.
                </p>
              </motion.div>
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
              >
                <h2 className="mb-10 text-2xl font-medium tracking-wide">
                  Info Projek
                </h2>
                <table className="w-full mb-16 text-xs sm:text-base">
                  <tbody>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        STATUS
                      </td>
                      <td className="p-2 border border-slate-400">
                        <span className="px-2 py-1 bg-teal-600 rounded text-neutral-200">
                          Dibuka untuk Tempahan
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        PEMAJU
                      </td>
                      <td className="p-2 border border-slate-400">
                        Platinum Victory Sdn. Bhd.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        HAK MILIK
                      </td>
                      <td className="p-2 border border-slate-400">
                        Pegangan Pajakan
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        JUMLAH UNIT
                      </td>
                      <td className="p-2 border border-slate-400">
                        3600 unit (4 blok)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        SAIZ
                      </td>
                      <td className="p-2 border border-slate-400">
                        800 kps (3 bilik • 2 bilik air)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        LOKASI
                      </td>
                      <td className="p-2 border border-slate-400">
                        Setapak, Kuala Lumpur
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        HARGA
                      </td>
                      <td className="p-2 border border-slate-400">
                        RM 300,000
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        MARGIN PINJAMAN
                      </td>
                      <td className="p-2 border border-slate-400">
                        Sehingga 100%
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        TAHUN SIAP
                      </td>
                      <td className="p-2 border border-slate-400">Q4 2027</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        JUMLAH ARAS
                      </td>
                      <td className="p-2 border border-slate-400">44 aras</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        JUMLAH LIF
                      </td>
                      <td className="p-2 border border-slate-400">6</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        KOS PENYELENGGARAAN
                      </td>
                      <td className="p-2 border border-slate-400">
                        RM0.33/kps
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.6,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
              >
                <h2 className="mb-10 text-2xl font-medium tracking-wide">
                  Kemudahan dan Galeri
                </h2>
                <div className="mb-10">
                  <Image
                    src="/project/j-satine/facilities.png"
                    width={1440}
                    height={240}
                    className="object-cover object-top"
                    alt="facilities"
                  />
                </div>
              </motion.div>
              <div className="mb-10">
                <div className="container mx-auto">
                  <div className="justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.7,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      className="items-center w-full"
                    >
                      <Swiper
                        ref={sliderRef}
                        speed={700}
                        spaceBetween={30}
                        onSlideChange={(swiper) =>
                          setSlideIndex(swiper.activeIndex)
                        }
                        className="relative z-50 flex items-center py-32 mb-7"
                      >
                        {pageContent.gallery.map((images, idx) => (
                          <SwiperSlide className="w-full" key={images.name}>
                            <div className="items-stretch block mt-10">
                              <Image
                                src={images.img}
                                alt={images.name}
                                width={1000}
                                height={800}
                                className="object-contain object-center mx-auto aspect-video"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.7,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                  >
                    <div className="flex space-x-3">
                      <div
                        onClick={prevHandler}
                        className={`${
                          isBeginning == true
                            ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                            : "opacity-100 bg-teal-600 text-white"
                        } relative top-0 group transition-all duration-300 ease-in-out w-8 h-8 cursor-pointer rounded-full inline-flex justify-center items-center`}
                      >
                        <BiChevronLeft
                          className={`text-3xl transition-all duration-300 ease-in-out group-hover:text-white ${
                            isBeginning == true
                              ? "group-hover:!text-gray-600"
                              : "group-hover:text-white"
                          }`}
                        />
                      </div>
                      <div
                        onClick={nextHandler}
                        className={`${
                          isEnd === true
                            ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                            : "opacity-100 bg-teal-600 text-white"
                        } relative top-0 group transition-all duration-300 ease-in-out w-8 h-8 cursor-pointer rounded-full inline-flex justify-center items-center`}
                      >
                        <BiChevronRight
                          className={`text-3xl transition-all duration-300 ease-in-out group-hover:text-white ${
                            isEnd === true
                              ? "group-hover:!text-gray-600"
                              : "group-hover:text-white"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.8,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <Image
                  src="/project/j-satine/facilities-m.PNG"
                  width={912}
                  height={572}
                  className="object-cover object-top"
                  alt="kemudahan"
                />
              </motion.div>
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
              >
                <h2 className="mb-10 text-2xl font-medium tracking-wide">
                  Pelan Lantai
                </h2>
                <div className="mb-16">
                  <Image
                    src="/project/j-satine/layout.PNG"
                    width={912}
                    height={572}
                    className="object-cover object-top"
                    alt="layout"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1.0,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
              >
                <h2 className="mb-10 text-2xl font-medium tracking-wide">
                  Lokasi
                </h2>
                <APIProvider
                  apiKey={String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)}
                >
                  <div style={{ height: "50vh", width: "100%" }}>
                    <Map
                      zoom={14}
                      center={position}
                      mapId={process.env.NEXT_PUBLIC_MAP_ID}
                    >
                      <AdvancedMarker
                        position={position}
                        onClick={() => setOpen(true)}
                      ></AdvancedMarker>
                      {open && (
                        <InfoWindow
                          position={position}
                          onCloseClick={() => setOpen(false)}
                        >
                          <p className="font-bold">
                            {pageContent.project.title}
                          </p>
                        </InfoWindow>
                      )}
                    </Map>
                  </div>
                </APIProvider>
                <p className="mt-8 text-center">
                  <Link
                    href={pageContent.project.map}
                    className="hover:bg-slate-800 text-[12px] tracking-[1px] uppercase bg-teal-600 rounded-md px-4 py-2 inline-block text-white"
                  >
                    Ke Google Maps
                  </Link>
                </p>
              </motion.div>
            </div>
          </article>
        </div>
      </motion.section>
      <section id="form" className="py-16 bg-teal-700 lg:py-32">
        <div className="container px-4 mx-auto font-poppins">
          <div className="flex justify-center">
            <div className="flex items-center w-10/12 gap-0">
              <div className="w-screen max-w-2xl mx-auto mb-10 text-center">
                {pageContent.contact.subtitle && (
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
                    className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-white"
                  >
                    {pageContent.contact.subtitle}
                  </motion.span>
                )}
                {pageContent.contact.title && (
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
                    className="text-2xl text-white lg:text-4xl"
                  >
                    {pageContent.contact.title}
                  </motion.h2>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto">
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
              className="relative flex items-center justify-center w-auto max-w-xl gap-5 mx-auto cursor-pointer"
            >
              <p className="text-slate-500 appearance-none bg-white py-4 px-7 w-auto !pr-16 max-w-md shadow-md rounded-full outline outline-none">
                Semak Kelayakan
              </p>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdm23Nvjv7gibiu9JkuCWaAwaWjohZakDHJLy1HVFsLjDlQ8Q/viewform"
                className="absolute flex items-center justify-center w-12 h-12 text-white rounded-full shadow-md appearance-none hover:bg-slate-800 top-1 right-1 bg-sky-600"
              >
                <SiGoogleforms />
              </Link>
            </motion.div>
            {pageContent.contact.description && (
              <motion.p
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
                className="w-auto max-w-md mx-auto mt-10 text-center text-white text-opacity-60"
              >
                {pageContent.contact.description}
              </motion.p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
