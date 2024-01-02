"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "sonner";

function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return "value" in e && "name" in e;
}

const sewaRumahContent = {
  heading: {
    title: "Sewa Rumah Anda",
    subtitle: "Servis kami",
  },
};

const SewaRumah = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const promise = () =>
      new Promise((resolve) => setTimeout(() => resolve({}), 2000));

    if (name.length < 1) {
      toast.error("Isi nama anda dengan betul.");
      setIsSubmitting(false);
      return;
    } else if (email.length < 1) {
      toast.error("Isi email anda dengan betul.");
      setIsSubmitting(false);
      return;
    } else if (phone.length < 1) {
      toast.error("Isi nombor telefon anda dengan betul.");
      setIsSubmitting(false);
      return;
    } else if (address.length < 1) {
      toast.error("Isi alamat anda dengan betul.");
      setIsSubmitting(false);
      return;
    } else
      toast.promise(promise, {
        loading: "Sila tunggu sebentar...",
        success:
          "Terima kasih kerana menghubungi kami! Email pengesahan telah dihantar ke alamat email anda.",
        error: "Tidak berjaya! Hubungi atau Whatsapp kami di +60176515784",
        duration: 10000,
      });

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
      });

    await fetch("/api/sewa", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        address: formData.address,
        message: formData.message,
      }),
    });

    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
    setIsSubmitting(false);
  }

  return (
    <>
      <section id="hero" className="pt-32 pb-24 lg:pt-52">
        <div className="container px-4 mx-auto">
          <div className="items-center justify-between w-full mx-auto lg:flex lg:w-10/12">
            <div className="mx-auto font-bold text-center font-poppins lg:max-w-3xl">
              {sewaRumahContent.heading.subtitle && (
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
                  {sewaRumahContent.heading.subtitle}
                </motion.span>
              )}
              {sewaRumahContent.heading.title && (
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
                  {sewaRumahContent.heading.title}
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
            <div className="flex-1 lg:w-6/12">
              <Image
                src="/project-2-min.jpg"
                width={1000}
                height={100}
                alt=""
                className="object-cover object-center h-full max-w-full bg-white"
              />
            </div>
            <div className="flex-1 lg:w-6/12">
              <form
                className="h-full px-4 bg-white py-14 lg:p-14 font-poppins"
                onSubmit={handleOnSubmit}
              >
                <h2 className="mb-4 text-3xl text-gray-800">Hubungi Kami</h2>
                <p className="mb-6 text-gray-500">
                  Dapatkan khidmat ejen yang terbaik untuk menyewakan hartanah
                  di kawasan Selangor dan Kuala Lumpur.
                </p>
                <div className="block px-0 mb-6">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-base text-gray-600"
                  >
                    Nama<span className="text-red-600">*</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="firstName"
                    name="firstName"
                    placeholder="Fikry Zulkifly"
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
                <div className="block px-0 mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base text-gray-600"
                  >
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="fikryzulkiflyproperty@gmail.com"
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
                <div className="block px-0 mb-6">
                  <label
                    htmlFor="phoneNo"
                    className="block mb-2 text-base text-gray-600"
                  >
                    Nombor Telefon<span className="text-red-600">* </span>
                    <span className="text-xs">(Format: 0123456789)</span>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    pattern="[0-9]{10,11}"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="0123456789"
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
                <div className="block px-0 mb-6">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-base text-gray-600"
                  >
                    Alamat Hartanah<span className="text-red-600">*</span>
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    name="address"
                    placeholder="No. 8, Bandar Sri Damansara, Kuala ..."
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
                <div className="block px-0 mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-base text-gray-600"
                  >
                    Mesej / Pesanan
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    cols={30}
                    rows={7}
                    placeholder="Mesej atau pesanan jika ada ..."
                    className="rounded-none appearance-none !text-base p-2 outline-1 mt-1 px-3 py-2 bg-white border shadow border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-600 focus:ring-teal-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
                <div className="block px-0 mb-6">
                  <Toaster richColors />
                  <button
                    className="cursor-pointer w-full block transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-teal-600 shadow py-4 px-5 text-white hover:bg-white hover:text-teal-600 hover:shadow-2xl disabled:bg-gray-500"
                    disabled={isSubmitting}
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

export default SewaRumah;
