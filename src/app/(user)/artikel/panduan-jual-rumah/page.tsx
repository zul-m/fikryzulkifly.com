"use client";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const pageContent = {
  post: {
    title: "Panduan Jual Rumah",
    date: "2023-12-05",
    image: "/artikel/1.png",
    category: "Panduan",
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
              width={1072}
              height={804}
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
                <h3
                  id="langkah-langkah-menjual-rumah"
                  className="text-2xl font-semibold sm:text-3xl"
                >
                  Langkah-Langkah Menjual Rumah
                  <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
                </h3>
                <p className="my-6">
                  Langkah-langkah berikut adalah penting dalam proses penjualan
                  rumah. Dari penetapan harga yang bijak sehingga pelantikan
                  perunding hartanah yang tepat, setiap langkah yang diambil
                  penting untuk memastikan kelancaran dalam menjual rumah anda.
                </p>
                <h4
                  id="tetapkan-harga-rumah"
                  className="mb-6 text-xl font-medium text-teal-600"
                >
                  1. Tetapkan harga rumah
                </h4>
                <p className="mb-6">
                  Menjual rumah merupakan suatu langkah besar dalam kehidupan
                  dan memerlukan perancangan yang rapi. Antara langkah pertama
                  yang perlu diambil adalah menetapkan harga jualan rumah dengan
                  bijak. Berikut adalah beberapa panduan untuk membantu anda
                  dalam proses jual rumah:
                </p>
                <ul className="list-decimal">
                  <li className="mb-6 ml-6">
                    Semak harga pasaran rumah di kawasan sekitar
                  </li>
                  <li className="mb-6 ml-6">Kaji pesaing dan permintaan</li>
                  <li className="mb-6 ml-6">
                    Ambil kira faktor yang pengaruhi harga jual seperti lokasi,
                    saiz rumah, dan kemudahan sekitar
                  </li>
                  <li className="mb-6 ml-6">
                    Ambil kira margin untuk rundingan dengan bakal pembeli
                  </li>
                  <li className="mb-6 ml-6">
                    Kira kos jual rumah termasuk caj ejen hartanah, kos
                    pembaikan, dan kos lain yang berkaitan
                  </li>
                </ul>
                <h4
                  id="rancang-jangkamasa-jualan"
                  className="mb-6 text-xl font-medium text-teal-600"
                >
                  2. Rancang jangkamasa jualan
                </h4>
                <p className="mb-6">
                  Langkah seterusnya dalam menjual rumah adalah merancang
                  jangkamasa proses penjualan. Ini termasuklah:
                </p>
                <ul className="list-decimal">
                  <li className="mb-6 ml-6">
                    Jangkamasa untuk dapatkan pembeli dengan melihat keadaan
                    pasaran semasa
                  </li>
                  <li className="mb-6 ml-6">
                    Jangkamasa proses kelulusan pinjaman dan guaman bagi
                    mengelakkan sebarang kelewatan yang tidak diingini
                  </li>
                  <li className="mb-6 ml-6">
                    Jangkamasa pindah milik dengan memastikan dokumen dan
                    prosedur yang diperlukan dapat diselesaikan dalam masa yang
                    ditetapkan
                  </li>
                </ul>
                <h4
                  id="sediakan-dokumen"
                  className="mb-6 text-xl font-medium text-teal-600"
                >
                  3. Sediakan dokumen
                </h4>
                <p className="mb-6">
                  Menyediakan dokumen yang betul adalah kunci untuk memudahkan
                  proses jual rumah. Berikut adalah senarai dokumen yang perlu
                  disediakan:
                </p>
                <ul className="list-decimal">
                  <li className="mb-6 ml-6">Salinan kad pengenalan</li>
                  <li className="mb-6 ml-6">
                    Salinan perjanjian jual beli semasa belian
                  </li>
                  <li className="mb-6 ml-6">Salinan geran</li>
                  <li className="mb-6 ml-6">Penyata pinjaman terkini</li>
                  <li className="mb-6 ml-6">Bil cukai pintu dan cukai tanah</li>
                  <li className="mb-6 ml-6">Bil penyelenggaraan</li>
                  <li className="mb-6 ml-6">Bil utiliti</li>
                </ul>
                <h4
                  id="sediakan-rumah-untuk-jualan"
                  className="mb-6 text-xl font-medium text-teal-600"
                >
                  4. Sediakan rumah untuk jualan
                </h4>
                <p className="mb-6">
                  Sebelum memasarkan rumah anda, pastikan rumah dalam keadaan
                  terbaik. Ini termasuklah membuat perubahan kecil dan
                  membersihkan rumah yang ingin dijual. Berikut adalah beberapa
                  panduan:
                </p>
                <ul className="list-decimal">
                  <li className="mb-6 ml-6">
                    Baiki impresi pertama rumah anda dengan mengemas rumah
                    supaya nampak lapang, buang atau simpan barangan yang tidak
                    perlu, baikpulih kerosakan, cat semula rumah, dan potong
                    rumput di halaman rumah
                  </li>
                  <li className="mb-6 ml-6">
                    Ambil gambar yang cantik dengan memastikan rumah kemas dan
                    lapang, memasang semua lampu dan buka langsir untuk
                    pencahayaan yang baik, mengambil gambar dari sudut bucu
                    rumah supaya nampak lapang dan luas, serta menghindari lawan
                    cahaya matahari untuk memastikan gambar jelas
                  </li>
                </ul>
                <h4
                  id="lantik-perunding-hartanah"
                  className="mb-6 text-xl font-medium text-teal-600"
                >
                  5. Lantik perunding hartanah
                </h4>
                <p className="mb-6">
                  Lantik perunding hartanah untuk memudahkan proses penjualan
                  rumah anda. Langkah-langkah yang perlu diambil:
                </p>
                <ul className="list-decimal">
                  <li className="mb-6 ml-6">
                    Sediakan segala dokumen, maklumat, dan gambar yang
                    diperlukan oleh perunding hartanah anda
                  </li>
                  <li className="mb-6 ml-6">
                    Buat temujanji dengan perunding hartanah anda untuk melihat
                    rumah secara langsung
                  </li>
                  <li className="mb-6 ml-6">
                    Berbincang dengan perunding hartanah anda mengenai harga,
                    tempoh masa, nasihat, dan perkara-perkara lain yang
                    berkaitan dengan proses penjualan
                  </li>
                </ul>
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
                      href="/artikel/panduan-jual-rumah/#langkah-langkah-menjual-rumah"
                      className="flex items-center justify-start py-4 font-medium border-t hover:underline"
                    >
                      Langkah-Langkah Menjual Rumah
                    </Link>
                    <li className="ml-6 list-decimal text-neutral-600">
                      <Link
                        href="/artikel/panduan-jual-rumah/#tetapkan-harga-rumah"
                        className="flex items-center justify-start mb-2 hover:underline"
                      >
                        Tetapkan harga rumah
                      </Link>
                    </li>
                    <li className="ml-6 list-decimal text-neutral-600">
                      <Link
                        href="/artikel/panduan-jual-rumah/#rancang-jangkamasa-jualan"
                        className="flex items-center justify-start mb-2 hover:underline"
                      >
                        Rancang jangkamasa jualan
                      </Link>
                    </li>
                    <li className="ml-6 list-decimal text-neutral-600">
                      <Link
                        href="/artikel/panduan-jual-rumah/#sediakan-dokumen"
                        className="flex items-center justify-start mb-2 hover:underline"
                      >
                        Sediakan dokumen
                      </Link>
                    </li>
                    <li className="ml-6 list-decimal text-neutral-600">
                      <Link
                        href="/artikel/panduan-jual-rumah/#sediakan-rumah-untuk-jualan"
                        className="flex items-center justify-start mb-2 hover:underline"
                      >
                        Sediakan rumah untuk jualan
                      </Link>
                    </li>
                    <li className="ml-6 list-decimal text-neutral-600">
                      <Link
                        href="/artikel/panduan-jual-rumah/#lantik-perunding-hartanah"
                        className="flex items-center justify-start mb-2 hover:underline"
                      >
                        Lantik perunding hartanah
                      </Link>
                    </li>
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
            Bersedia untuk menjual rumah anda?
          </h2>
          <div className="mb-10">
            <Link
              href="https://api.whatsapp.com/send?phone=60176515784"
              className="px-10 py-5 text-sm font-medium tracking-wider rounded-full shadow-md bg-sky-500 hover:bg-neutral-100 sm:text-base"
            >
              HUBUNGI KAMI
            </Link>
          </div>
          <p className="text-base font-medium sm:text-lg text-neutral-200">
            Atau{" "}
            <Link
              href="/artikel/panduan-jual-rumah-guna-ejen"
              className="underline hover:no-underline hover:text-sky-600"
            >
              lihat info lanjut
            </Link>{" "}
            peranan ejen hartanah dalam menguruskan proses penjualan rumah.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default page;
