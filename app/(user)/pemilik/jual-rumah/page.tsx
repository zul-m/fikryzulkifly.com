"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const jualRumahContent = {
  heading: {
    title: "Jual Rumah Anda",
    subtitle: "Servis kami",
  },
};

const JualRumah = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    setState("loading");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        address: formData.address,
        message: formData.message,
      }),
    });

    setState("ready");
  }

  return (
    <>
      <section id="hero" className="pt-32 lg:pt-52 pb-24">
        <div className="container px-4 mx-auto">
          <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between">
            <div className="font-poppins font-bold text-center lg:max-w-3xl mx-auto">
              {jualRumahContent.heading.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.03,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12.5px] mb-5 inline-block text-teal-600"
                >
                  {jualRumahContent.heading.subtitle}
                </motion.span>
              )}
              {jualRumahContent.heading.title && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.06,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl"
                >
                  {jualRumahContent.heading.title}
                </motion.h1>
              )}
            </div>
          </div>
        </div>
      </section>
      <motion.section
        id="form"
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
      >
        <div className="container px-4 mx-auto">
          <div className="lg:flex items-stretch mb-32 border-[0.5px] shadow-md">
            <div className="lg:w-6/12 flex-1">
              <Image
                src="/project-4-min.jpg"
                width={1000}
                height={100}
                alt=""
                className="object-cover object-center max-w-full h-full bg-white"
              />
            </div>
            <div className="lg:w-6/12 flex-1">
              <form
                className="py-14 px-4 lg:p-14 bg-white h-full font-inter"
                onSubmit={handleOnSubmit}
              >
                <h2 className="text-gray-800 mb-4 text-3xl">Hubungi Kami</h2>
                <p className="text-gray-500 mb-6">
                  Dapatkan khidmat ejen yang terbaik untuk menjual hartanah di
                  kawasan Selangor dan Kuala Lumpur.
                </p>
                <div className="block mb-6 px-0">
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-gray-600 text-base"
                  >
                    Nama<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="Fikry Zulkifly"
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
                <div className="block mb-6 px-0">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-gray-600 text-base"
                  >
                    {" "}
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="fikryzulkiflyproperty@gmail.com"
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
                <div className="block mb-6 px-0">
                  <label
                    htmlFor="phoneNo"
                    className="mb-2 block text-gray-600 text-base"
                  >
                    Nombor Telefon<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="+60176515784"
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  ></input>
                </div>
                <div className="block mb-6 px-0">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-gray-600 text-base"
                  >
                    Alamat Hartanah<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="address"
                    name="address"
                    placeholder="No. 8, Bandar Sri Damansara, Kuala ..."
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  ></input>
                </div>
                <div className="block mb-6 px-0">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-gray-600 text-base"
                  >
                    Mesej / Pesanan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    cols={30}
                    rows={7}
                    placeholder="Mesej atau pesanan jika ada ..."
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  ></textarea>
                </div>
                <div className="block mb-6 px-0">
                  <button
                    className="cursor-pointer w-full block transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-teal-600 shadow py-4 px-5 text-white hover:bg-white hover:text-teal-600 hover:shadow-2xl"
                    disabled={state === "loading"}
                  >
                    Hantar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default JualRumah;
