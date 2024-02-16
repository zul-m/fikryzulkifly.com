"use client";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoMdBulb } from "react-icons/io";

const pageContent = {
  post: {
    title: "Apa Itu RUMAWIP",
    date: "2024-02-14",
    image: "/artikel/rumawip.png",
    category: "Rumawip",
  },
};

const page = () => {
  return (
    <>
      <motion.section
        id="post"
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
        <div className="max-w-6xl mx-auto font-poppins">
          <div className="max-w-4xl mx-auto mb-16 font-bold text-center">
            <h1 className="text-center text-slate-900 text-4xl/none lg:text-6xl/none">
              {pageContent.post.title}
            </h1>
            <p className="mt-10 text-slate-500">
              <span className="inline-flex space-x-3">
                <span>
                  {format(parseISO(pageContent.post.date), "d LLL, yyy")}
                </span>
                <span>•</span>
                <span>{pageContent.post.category}</span>
              </span>
            </p>
          </div>
          <div className="mb-16">
            <Image
              src={pageContent.post.image}
              width={1200}
              height={810}
              alt={pageContent.post.title}
              className="object-cover object-top mx-auto"
            />
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
            className="flex flex-col max-w-6xl mx-auto space-x-8 md:flex-row"
          >
            <div className="md:w-4/6">
              <article>
                <p className="mb-6">
                  RUMAWIP, atau nama barunya Residensi Wilayah, adalah satu
                  inisiatif kerajaan untuk menyediakan rumah mampu milik kepada
                  pembeli rumah pertama, terutamanya untuk golongan
                  berpendapatan sederhana dan rendah. Program ini bertujuan
                  untuk memberikan peluang kepada golongan ini untuk memiliki
                  rumah di Wilayah Persekutuan dengan harga yang lebih mampu
                  milik.
                </p>
                <p className="mb-6">
                  Setiap RUMAWIP mempunyai ciri-ciri berikut:
                </p>
                <ul className="list-disc">
                  <li className="mb-6 ml-6">Kos maksimum RM 300,000</li>
                  <li className="mb-6 ml-6">Saiz rumah tidak kurang 700kps</li>
                  <li className="mb-6 ml-6">
                    Mempunyai 3 bilik tidur dan 2 bilik air
                  </li>
                  <li className="mb-6 ml-6">Beralamat di Wilayah</li>
                </ul>
                <p className="mb-6">
                  Harga rumah dan saiz "layout" berbeza mengikut lokasi
                  pembangunan dijalankan. Terdapat 3 jenis RUMAWIP yang biasa
                  ditawarkan:
                </p>
                <table className="w-full mb-6">
                  <tbody>
                    <tr>
                      <td className="p-2 bg-gray-200 border border-slate-400">
                        Projek harga rendah (700kps)
                      </td>
                      <td className="p-2 border border-slate-400">RM 63,000</td>
                    </tr>
                    <tr>
                      <td className="p-2 bg-gray-200 border border-slate-400">
                        Projek harga sederhana rendah (800kps)
                      </td>
                      <td className="p-2 border border-slate-400">
                        RM 63,001 ~ RM 150,000
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 bg-gray-200 border border-slate-400">
                        Projek harga sederhana (650kps ~ 900kps)
                      </td>
                      <td className="p-2 border border-slate-400">
                        RM 150,001 ~ RM 300,000
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3
                  id="siapa-yang-layak-untuk-memohon?"
                  className="text-2xl font-semibold sm:text-3xl"
                >
                  Siapa yang layak untuk memohon?
                  <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
                </h3>
                <p className="my-6">
                  Projek RUMAWIP mempunyai syarat-syarat khusus untuk
                  memilikinya. Anda layak untuk memohon jika anda berjaya
                  memenuhi syarat-syarat di bawah:
                </p>
                <ul className="list-decimal">
                  <li className="mb-6 ml-6">Warganegara Malaysia</li>
                  <li className="mb-6 ml-6">Berumur 21 tahun ke atas</li>
                  <li className="mb-6 ml-6">
                    Dilahirkan atau menetap atau bekerja di Wilayah Persekutuan
                  </li>
                  <li className="mb-6 ml-6">
                    Pendapatan kasar bulanan di bawah RM 10,000 (bujang) dan RM
                    15,000 (berkahwin)
                  </li>
                </ul>
                <p className="mb-6">
                  Antara projek RUMAWIP yang masih dibuka untuk pendaftaran:
                </p>
                <table className="w-full mb-6">
                  <tbody>
                    <tr>
                      <td className="p-2 bg-gray-200 border border-slate-400">
                        <Link
                          href="/pelanggan/projek-baru/rumawip-putrajaya-sentral"
                          className="hover:underline hover:underline-offset-2"
                        >
                          Residensi Wilayah Putrajaya Sentral
                        </Link>
                      </td>
                      <td className="p-2 border border-slate-400">
                        800kps, RM 300,000 di Presint 7 Putrajaya
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 bg-gray-200 border border-slate-400">
                        <Link
                          href="/pelanggan/projek-baru/rumawip-j-satine-setapak"
                          className="hover:underline hover:underline-offset-2"
                        >
                          Residensi J Satine
                        </Link>
                      </td>
                      <td className="p-2 border border-slate-400">
                        800kps, RM 300,000 di Wangsa Maju
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 bg-gray-200 border border-slate-400">
                        <Link
                          href="/pelanggan/projek-baru/rumawip-max-ii-setapak"
                          className="hover:underline hover:underline-offset-2"
                        >
                          Residensi Max II
                        </Link>
                      </td>
                      <td className="p-2 border border-slate-400">
                        800kps, RM 300,000 di Setapak
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 bg-gray-200 border border-slate-400">
                        <Link
                          href="/pelanggan/projek-baru"
                          className="hover:underline hover:underline-offset-2"
                        >
                          Vista Adesa, Residensi Desa Timur
                        </Link>
                      </td>
                      <td className="p-2 border border-slate-400">
                        800kps, RM 300,000 di Bukit Bintang
                      </td>
                    </tr>
                  </tbody>
                </table>
                <blockquote className="p-6 mb-6 bg-teal-100 bg-opacity-50 border-l-4 border-l-teal-600">
                  <p>
                    Lihat{" "}
                    <span>
                      <Link
                        href="/pelanggan/projek-baru"
                        className="font-medium hover:underline hover:underline-offset-2 text-sky-700"
                      >
                        PROJEK BARU
                      </Link>
                    </span>{" "}
                    untuk info lanjut dan butiran projek yang ada.
                  </p>
                </blockquote>
                <h3
                  id="bagaimana-cara-untuk-memohon-rumawip?"
                  className="text-2xl font-semibold sm:text-3xl"
                >
                  Bagaimana cara untuk memohon RUMAWIP?
                  <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
                </h3>
                <p className="my-6">
                  Terdapat dua cara untuk memohon RUMAWIP iaitu dengan memohon
                  sendiri atau memohon dengan perunding hartanah yang
                  mengendalikan projek RUMAWIP ini.
                </p>
                <h4
                  id="mohon-sendiri"
                  className="mb-6 text-xl font-medium text-teal-600"
                >
                  A. Mohon sendiri
                </h4>
                <ul className="list-decimal">
                  <li className="mb-6 ml-6">
                    Daftar dan mohon skim ini di portal online RUMAWIP untuk
                    mencari rumah yang anda minat.
                  </li>
                  <li className="mb-6 ml-6">
                    Lampirkan dokumen-dokumen yang diperlukan seperti Surat
                    Sumpah, Bukti Kad Identiti Pemohon, Sijil Nikah, Sijil
                    Kelahiran, dan lain-lain.
                  </li>
                  <li className="mb-6 ml-6">
                    Tekan "daftar" dan tunggu agen JWP menghubungi anda.
                  </li>
                </ul>
                <h4
                  id="mohon-dengan-ejen-rumawip-berdaftar"
                  className="mb-6 text-xl font-medium text-teal-600"
                >
                  B. Mohon dengan Ejen RUMAWIP berdaftar
                </h4>
                <ul className="list-decimal">
                  <li className="mb-6 ml-6">
                    Hubungi ejen yang mengendalikan projek RUMAWIP yang anda
                    minat.
                  </li>
                  <li className="mb-6 ml-6">
                    Minta penerangan lanjut mengenai projek RUMAWIP tersebut.
                  </li>
                  <li className="mb-6 ml-6">
                    Ejen akan menyemak kelayakan anda dan membantu anda dalam
                    proses permohonan.
                  </li>
                </ul>
                <h3
                  id="apa-kelebihan-rumawip?"
                  className="text-2xl font-semibold sm:text-3xl"
                >
                  Apa Kelebihan RUMAWIP?
                  <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
                </h3>
                <p className="my-6">
                  RUMAWIP adalah projek perumahan yang direka untuk menawarkan
                  rumah mampu milik dan mudah diakses kepada warganegara
                  Malaysia di sekitar Wilayah Persekutuan.
                </p>
                <p className="mb-6">
                  Ini adalah salah satu sokongan dan bantuan kerajaan yang
                  mempunyai pelbagai faedah istimewa!
                </p>
                <p className="mb-6">
                  Rumah ini dijual pada harga yang lebih rendah berbanding harga
                  pasaran, dan selalunya dilengkapi dengan pelbagai kemudahan
                  seperti taman permainan dan kolam renang. Oleh kerana projek
                  ini mendapat sambutan yang tinggi, keutamaan selalunya
                  diberikan kepada pembeli rumah pertama.
                </p>
                <p className="mb-6">
                  Walaupun Residensi Wilayah ini menawarkan rumah yang berharga
                  mampu milik, anda masih perlu menyediakan deposit sebanyak 10%
                  untuk pembelian rumah. Oleh itu, anda perlulah{" "}
                  <span>
                    <Link
                      href="https://www.propertyguru.com.my/property-guides/cara-beli-rumah-pertama-dengan-gaji-kecil-23477"
                      className="font-medium hover:underline hover:underline-offset-2 text-sky-700"
                    >
                      bijak menguruskan kewangan
                    </Link>
                  </span>{" "}
                  bagi menyelesaikan jumlah deposit yang telah ditetapkan.
                </p>
                <p className="mb-6">
                  Terdapat juga syarat-syarat lain yang perlu dipatuhi bagi
                  memiliki RUMAWIP ini seperti rumah tidak boleh dijual semula
                  dalam masa 10 tahun selepas pembelian.
                </p>
                <p className="mb-6">
                  Skim ini jugak meletakkan syarat yang ketat untuk menyewakan
                  rumah yang telah dibeli. Rumah dibawah projek ini hanya boleh
                  disewakan kepada{" "}
                  <span>
                    <Link
                      href="https://www.bharian.com.my/berita/wilayah/2018/01/371757/boleh-sewa-rumawip-kepada-warga-tempatan-tengku-adnan"
                      className="font-medium hover:underline hover:underline-offset-2 text-sky-700"
                    >
                      penyewa yang memenuhi kriteria
                    </Link>
                  </span>{" "}
                  yang ditetapkan seperti berwarganegara Malaysia atau
                  pemiliknya terpaksa berpindah keluar daripada Wilayah
                  Persekutuan.
                </p>
              </article>
            </div>
            <div className="hidden md:w-2/6 md:grid gap-y-8 lg:gap-8 xl:gap-16">
              <div className="col-span-12 lg:col-span-4">
                <details
                  className="sticky p-4 overflow-hidden overflow-y-auto text-sm border rounded-lg shadow-md top-24"
                  open
                >
                  <summary className="font-semibold capitalize cursor-pointer">
                    Isi kandungan
                  </summary>
                  <ul className="mt-4">
                    <Link
                      href="/artikel/apa-itu-rumawip/#siapa-yang-layak-untuk-memohon?"
                      className="flex items-center justify-start pt-4 font-medium border-t hover:underline"
                    >
                      Siapa yang layak untuk memohon?
                    </Link>
                  </ul>
                  <ul className="mt-4">
                    <Link
                      href="/artikel/apa-itu-rumawip/#bagaimana-cara-untuk-memohon-rumawip?"
                      className="flex items-center justify-start py-4 font-medium border-t hover:underline"
                    >
                      Bagaimana cara untuk memohon RUMAWIP?
                    </Link>
                    <li className="ml-6 list-disc text-neutral-600">
                      <Link
                        href="/artikel/apa-itu-rumawip/#mohon-sendiri"
                        className="flex items-center justify-start mb-2 hover:underline"
                      >
                        Mohon sendiri
                      </Link>
                    </li>
                    <li className="ml-6 list-disc text-neutral-600">
                      <Link
                        href="/artikel/apa-itu-rumawip/#mohon-dengan-ejen-rumawip-berdaftar"
                        className="flex items-center justify-start mb-2 hover:underline"
                      >
                        Mohon dengan Ejen RUMAWIP berdaftar
                      </Link>
                    </li>
                  </ul>
                  <ul className="mt-4">
                    <Link
                      href="/artikel/apa-itu-rumawip/#apa-kelebihan-rumawip?"
                      className="flex items-center justify-start pt-4 font-medium border-t hover:underline"
                    >
                      Apa Kelebihan RUMAWIP?
                    </Link>
                  </ul>
                </details>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <section
        id="contact"
        className="bg-gradient-to-tr from-green-500 via-teal-500 to-sky-500"
      >
        <motion.div
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
          className="flex flex-col max-w-5xl px-4 py-24 mx-auto font-poppins xl:px-0"
        >
          <h2 className="mb-10 text-3xl font-extrabold text-neutral-200 sm:text-4xl">
            Mencari rumah impian?
          </h2>
          <div className="mb-10">
            <Link
              href="https://api.whatsapp.com/send?phone=60176515784"
              className="px-10 py-5 text-sm font-medium tracking-wider rounded-full shadow-md bg-sky-500 hover:bg-neutral-100 sm:text-base"
            >
              PROJEK BARU
            </Link>
          </div>
          <p className="text-base font-medium sm:text-lg text-neutral-200">
            Lihat projek baru untuk info lanjut dan butiran projek yang ada.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default page;
