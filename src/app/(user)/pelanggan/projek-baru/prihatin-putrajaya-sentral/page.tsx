"use client";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
} from "@vis.gl/react-google-maps";
import Link from "next/link";
import { SiGoogleforms } from "react-icons/si";

const pageContent = {
  project: {
    title: "PRIHATIN Putrajaya Sentral",
    date: "2023-09-21",
    image: "/project/prihatin-putrajaya/hero.jpg",
    category: "Projek Baru",
    location: "Presint 7, Putrajaya",
    map: "https://maps.app.goo.gl/fLLgd9yiny53meBM8",
    year: "2027",
    developer: "Pan Sejati Development (M) Sdn. Bhd.",
    price: "RM 200,000",
  },
  gallery: [
    {
      img: "/project/prihatin-putrajaya/gallery/ilustrasi.png",
      name: "Ilustrasi Projek",
    },
    {
      img: "/project/prihatin-putrajaya/gallery/putrajaya-sentral.jpg",
      name: "Putrajaya Sentral",
    },
    {
      img: "/project/prihatin-putrajaya/gallery/syarat.png",
      name: "Syarat Permohonan",
    },
    {
      img: "/project/prihatin-putrajaya/gallery/kemudahan.png",
      name: "Kemudahan",
    },
    {
      img: "/project/prihatin-putrajaya/gallery/pendaftaran.png",
      name: "Pendaftaran",
    },
  ],
  contact: {
    title: "Miliki Rumah Impian, Hari Ini",
    subtitle: "Semak Kelayakan",
    description:
      "Berminat dengan projek ini? Buat semakan kelayakan dan hantar dokumen yang diperlukan. Yuran tempahan adalah PERCUMA!",
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

  const position = { lat: 2.9378210094661754, lng: 101.66968354232947 };
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
                  {format(parseISO(pageContent.project.date), "d LLL, yyy")}
                </span>
                <span>•</span>
                <span>{pageContent.project.category}</span>
              </span>
            </p>
          </div>
          <div className="mb-16">
            <Image
              src={pageContent.project.image}
              width={898}
              height={590}
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
                  Projek ini dilancarkan di Presint 7, Putrajaya pada Ogos 2023.
                  Ianya dibangunkan berdekatan dengan Stesen MRT Putrajaya
                  Sentral, sekaligus memberikan akses yang mudah kepada bakal
                  pemilik. Ia juga berhampiran dengan pelbagai perkhidmatan
                  kesihatan, pusat beli-belah, dan pengangkutan awam yang lain.
                </p>
                <p className="mb-16">
                  Pemohon perlu mematuhi syarat permohonan yang telah ditetapkan
                  oleh Jabatan Wilayah Persekutuan(JWP) untuk melayakkan mereka
                  memiliki rumah mampu milik ini.
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
                        <span className="px-2 py-1 bg-teal-600 rounded text-neutral-100">
                          Dibuka untuk Tempahan
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        PEMAJU
                      </td>
                      <td className="p-2 border border-slate-400">
                        {pageContent.project.developer}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        HAK MILIK
                      </td>
                      <td className="p-2 border border-slate-400">
                        Pegangan Bebas
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        JUMLAH UNIT
                      </td>
                      <td className="p-2 border border-slate-400">1336 unit</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        SAIZ
                      </td>
                      <td className="p-2 border border-slate-400">
                        750 kps (3 bilik • 2 bilik air)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        JENIS
                      </td>
                      <td className="p-2 border border-slate-400">Apartmen</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        LOKASI
                      </td>
                      <td className="p-2 border border-slate-400">
                        {pageContent.project.location}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        HARGA
                      </td>
                      <td className="p-2 border border-slate-400">
                        RM 200,000
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
                <div className="mb-16">
                  <Image
                    src="/project/prihatin-putrajaya/facilities.jpg"
                    width={1440}
                    height={240}
                    className="object-cover object-top"
                    alt="facilities"
                  />
                </div>
                <div className="mb-16">
                  <Image
                    src="/project/prihatin-putrajaya/facility.png"
                    width={1080}
                    height={478}
                    className="object-cover object-top"
                    alt="facility"
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
                                width={754}
                                height={710}
                                className="object-contain object-center mx-auto"
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
                          isBeginning === true
                            ? "opacity-30 bg-gray-300 text-gray-600 !cursor-pointer"
                            : "opacity-100 bg-teal-600 text-white"
                        } relative top-0 group transition-all duration-300 ease-in-out w-8 h-8 cursor-pointer rounded-full inline-flex justify-center items-center`}
                      >
                        <BiChevronLeft
                          className={`text-3xl transition-all duration-300 ease-in-out group-hover:text-white ${
                            isBeginning === true
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
                    src="/project/prihatin-putrajaya/layout.png"
                    width={1080}
                    height={591}
                    className="object-cover object-top"
                    alt="layout"
                  />
                </div>
                <div className="mb-16">
                  <Image
                    src="/project/prihatin-putrajaya/layout-2.PNG"
                    width={749}
                    height={706}
                    className="object-cover object-top"
                    alt="layout 2"
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
                <p className="mt-8 mb-10 text-center">
                  <Link
                    href={pageContent.project.map}
                    className="hover:bg-slate-800 text-[12px] tracking-[1px] uppercase bg-teal-600 rounded-md px-4 py-2 inline-block text-white"
                  >
                    Ke Google Maps
                  </Link>
                </p>
                <div className="mb-16">
                  <Image
                    src="/project/prihatin-putrajaya/location.png"
                    width={1080}
                    height={1080}
                    className="object-cover object-top"
                    alt="Lokasi"
                  />
                </div>
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
                className="w-auto max-w-xl mx-auto mt-10 text-center text-white text-opacity-60"
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
