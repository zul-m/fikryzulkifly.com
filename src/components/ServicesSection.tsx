"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiBulb, BiHistory, BiLineChart, BiWorld } from "react-icons/bi";
import { Tb360View, TbKey, TbTransferIn } from "react-icons/tb";

const servicesContent = {
  heading: {
    title: "Bagaimana kami boleh bantu anda?",
    subtitle: "Servis kami",
    description:
      "Kami akan bantu anda menguruskan hartanah dengan cara yang betul dan pantas serta selamat.",
  },
  steps: [
    {
      number: "01",
      icon: TbKey,
      title: "Jual",
      description:
        "Kami membantu menentukan harga yang sesuai bagi rumah anda, serta mempromosikan secara meluas melalui pelbagai platform.",
      btn: {
        href: "/pemilik/jual-rumah",
        label: "Lebih Lanjut",
      },
    },
    {
      number: "02",
      icon: TbTransferIn,
      title: "Sewa",
      description:
        "Kami menyusun perjanjian sewaan yang jelas dan adil bagi proses penyewaan yang teliti untuk ketenangan fikiran anda.",
      btn: {
        href: "/pelanggan/sewa",
        label: "Lebih Lanjut",
      },
    },
    {
      number: "03",
      icon: Tb360View,
      title: "Lawatan Maya",
      description:
        "Kami mempamerkan hartanah anda dengan lawatan maya yang interaktif membolehkan prospek melihat rumah tanpa perlu berada di lokasi.",
      btn: {
        href: "/360",
        label: "Lebih Lanjut",
      },
    },
  ],
  features: [
    {
      icon: BiHistory,
      title: "Pengalaman dalam industri",
      description:
        "Kami membawa bersama pengalaman bertahun-tahun dalam industri hartanah. Pasukan kami terdiri daripada profesional yang berpengetahuan luas tentang pasaran hartanah semasa meliputi pelbagai jenis kediaman, dari rumah kediaman hingga hartanah komersial.",
      btn: {
        href: "#",
        label: "Ketahui Lebih Lanjut",
      },
    },
    {
      icon: BiBulb,
      title: "Pengetahuan yang mendalam",
      description:
        "Kami memahami keunikan kawasan di Kuala Lumpur dan Selangor, termasuk faktor-faktor seperti pasaran tempatan, kemudahan awam, dan persekitaran sekitar. Ini membolehkan kami memberikan nasihat yang tepat dan berkesan kepada pelanggan kami.",
      btn: {
        href: "#",
        label: "Ketahui Lebih Lanjut",
      },
    },
    {
      icon: BiWorld,
      title: "Rangkaian yang luas",
      description:
        "Kami berhubung dengan pelbagai pihak, termasuk pihak bank, peguam hartanah, penilai harga, dan pihak-pihak lain yang relevan dalam industri hartanah. Ini membuka pintu kepada pelbagai peluang dan perkhidmatan berkualiti tinggi untuk kejayaan hartanah anda.",
      btn: {
        href: "#",
        label: "Ketahui Lebih Lanjut",
      },
    },
    {
      icon: BiLineChart,
      title: "Analisa pasaran semasa",
      description:
        "Kami menawarkan perkhidmatan analisa pasaran semasa yang teliti dan terperinci. Ini membolehkan kami dan pelanggan kami membuat keputusan yang berinformasi, memanfaatkan trend pasaran terkini untuk kelebihan bersama.",
      btn: {
        href: "#",
        label: "Ketahui Lebih Lanjut",
      },
    },
  ],
};

const ServicesSection = () => {
  return (
    <>
      <section id="services" className="py-16 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="justify-center mb-20 lg:flex lg:mb-36">
            <div className="items-center w-full gap-0 font-bold lg:w-8/12 lg:flex font-poppins">
              <div className="mb-5 lg:mb-0">
                {servicesContent.heading.subtitle && (
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
                    className="uppercase tracking-[3px] text-sm mb-5 inline-block text-teal-600"
                  >
                    {servicesContent.heading.subtitle}
                  </motion.span>
                )}
                {servicesContent.heading.title && (
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
                    className="text-2xl lg:text-4xl"
                  >
                    {servicesContent.heading.title}
                  </motion.h2>
                )}
              </div>
              {/* <div className="self-end lg:w-5/12">
                {servicesContent.heading.description && (
                  <motion.p
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
                    className="text-gray-500"
                  >
                    {servicesContent.heading.description}
                  </motion.p>
                )}
              </div> */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 mx-auto lg:grid-cols-3 -mb-72 lg:w-10/12 font-poppins">
            {servicesContent.steps.map((step, idx) => {
              idx *= 0.2;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.1 } }}
                  className="relative pt-32 pb-20 pl-10 pr-10 overflow-hidden duration-300 rounded-md cursor-default group bg-neutral-100 hover:bg-sky-600 hover:shadow-2xl"
                >
                  <span className="text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0">
                    {step.number}
                  </span>
                  <div className="absolute top-10 right-10">
                    <span className="text-3xl text-teal-700 transition-all duration-300 ease-in-out group-hover:text-white">
                      <step.icon />
                    </span>
                  </div>
                  <div className="relative z-40 flex items-start gap-3">
                    <div className="text-[18px] font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out group-hover:text-white">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-[15px] text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white">
                        {step.description}
                      </p>
                      <p>
                        <Link
                          href={step.btn.href}
                          className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-teal-700 duration-300 transition-all ease-in-out group-hover:border-white group-hover:text-white"
                        >
                          {step.btn.label}
                        </Link>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="features" className="pb-32 bg-teal-700 pt-72 lg:pt-60">
        <div className="container px-4 mx-auto">
          <div className="justify-center lg:flex">
            <div className="flex items-center w-full gap-0 lg:w-8/12">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 font-poppins">
                {servicesContent.features.map((feature, idx) => {
                  idx *= 0.2;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: idx,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      className="relative z-40 flex items-start gap-3"
                    >
                      <div>
                        <span className="text-3xl text-white">
                          <feature.icon />
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-4 text-lg text-white">
                          {feature.title}
                        </h3>
                        <p className="leading-relaxed text-[15px] text-white text-opacity-75 mb-7">
                          {feature.description}
                        </p>
                        {/* <p>
                          <Link
                            href={feature.btn.href}
                            className="text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block text-white border-white border-opacity-25 transition-all duration-300 ease-in-out hover:border-opacity-100"
                          >
                            {feature.btn.label}
                          </Link>
                        </p> */}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
