"use client";
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
    title: "RUMAWIP Max II",
    date: "2023-10-28",
    image: "/project/max-ii/Hero.jpeg",
    category: "Projek Baru",
    location: "Jalan Teratai, Setapak, KL",
    map: "",
    year: "2027",
    developer: "Prominent Maxim Sdn. Bhd.",
    price: "RM 300,000",
  },
  gallery: [
    { img: "/project/max-ii/gallery/max-ii-1.jpg", name: "Max II 1" },
    { img: "/project/max-ii/gallery/max-ii-2.jpg", name: "Max II 2" },
    { img: "/project/max-ii/gallery/max-ii-3.jpg", name: "Max II 3" },
    { img: "/project/max-ii/gallery/max-ii-4.jpg", name: "Max II 4" },
    { img: "/project/max-ii/gallery/max-ii-5.jpg", name: "Max II 5" },
    { img: "/project/max-ii/gallery/max-ii-6.jpg", name: "Max II 6" },
    { img: "/project/max-ii/gallery/max-ii-7.jpg", name: "Max II 7" },
    { img: "/project/max-ii/gallery/max-ii-8.jpg", name: "Max II 8" },
    { img: "/project/max-ii/gallery/max-ii-9.jpg", name: "Max II 9" },
    { img: "/project/max-ii/gallery/max-ii-10.jpg", name: "Max II 10" },
    { img: "/project/max-ii/gallery/max-ii-11.jpg", name: "Max II 11" },
    { img: "/project/max-ii/gallery/max-ii-12.jpg", name: "Max II 12" },
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
              width={1080}
              height={607}
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
                  Residensi MAX II adalah projek perumahan mampu milik yang
                  dilancarkan oleh kerajaan Malaysia melalui program Residensi
                  Wilayah (RUMAWIP). Projek ini dibangunkan di Setapak, Kuala
                  Lumpur, oleh Prominent Maxim Sdn. Bhd., pemaju hartanah yang
                  terkenal di Kuala Lumpur.
                </p>
                <p className="mb-16">
                  Projek Residensi MAX II terdiri daripada dua blok apartmen,
                  dengan jumlah 302 unit yang bersaiz 801 kaki persegi. Setiap
                  unit mempunyai 3 bilik tidur dan 2 bilik air, serta tempat
                  letak kereta percuma. Harga jualan rumah ini adalah RM
                  300,000.
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
                        Pegangan Pajakan
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        JUMLAH UNIT
                      </td>
                      <td className="p-2 border border-slate-400">
                        604 unit (2 blok)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        SAIZ
                      </td>
                      <td className="p-2 border border-slate-400">
                        801 kps (3 bilik • 2 bilik air)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium bg-gray-200 border border-slate-400">
                        JENIS
                      </td>
                      <td className="p-2 border border-slate-400">
                        Kondominium
                      </td>
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
                    src="/project/max-ii/facilities.jpg"
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
                                width={4608}
                                height={3456}
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
                    src="/project/max-ii/Unit-Dimension.jpg"
                    width={1045}
                    height={600}
                    className="object-cover object-top"
                    alt="Max II unit dimension"
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
              <p className="w-auto py-4 bg-white appearance-none text-slate-500 px-7 !pr-16 max-w-md shadow-md rounded-full outline outline-none">
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
