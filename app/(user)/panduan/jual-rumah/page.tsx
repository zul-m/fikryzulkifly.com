import SlideUp from "@/components/SlideUp";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="pt-16 sm:pt-24">
      <div className="border-l-0 sm:border-l-2 border-neutral-200 flex py-14 sm:py-20 flex-col tracking-wide mx-auto max-w-5xl px-4 sm:px-8">
        <h2 className="font-playfair mb-4 font-bold text-4xl sm:text-5xl">
          Panduan Jual Rumah
        </h2>
        <p className="font-inter text-lg sm:text-xl mb-6">
          Strategi dan langkah-langkah profesional
        </p>
      </div>
      <div className="bg-neutral-100 py-16 px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
            <div className="my-auto lg:w-3/5">
              <h3 className="font-playfair font-semibold text-2xl sm:text-3xl">
                Tetapkan harga rumah
                <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
              </h3>
              <article className="font-inter">
                <p className="my-6">
                  Menjual rumah merupakan suatu langkah besar dalam kehidupan
                  dan memerlukan perancangan yang rapi. Antara langkah pertama
                  yang perlu diambil adalah menetapkan harga jualan rumah dengan
                  bijak. Berikut adalah beberapa panduan untuk membantu anda
                  dalam proses jual rumah:
                </p>
                <ul className="list-decimal list-inside">
                  <li className="mb-6">
                    Semak harga pasaran rumah di kawasan sekitar
                  </li>
                  <li className="mb-6">Kaji pesaing dan permintaan</li>
                  <li className="mb-6">
                    Ambil kira faktor yang pengaruhi harga jual seperti lokasi,
                    saiz rumah, dan kemudahan sekitar
                  </li>
                  <li className="mb-6">
                    Ambil kira margin untuk rundingan dengan bakal pembeli
                  </li>
                  <li>
                    Kira kos jual rumah termasuk caj ejen hartanah, kos
                    pembaikan, dan kos lain yang berkaitan
                  </li>
                </ul>
              </article>
            </div>
            <div className="lg:w-2/5 xl:-mt-24 m-auto">
              <Image
                className="w-auto h-auto rounded shadow-lg"
                src="/1.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </SlideUp>
      </div>
      <div className="py-16 px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
            <div className="lg:w-2/5 xl:-mt-24 m-auto">
              <Image
                className="w-auto h-auto rounded shadow-lg"
                src="/2.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="my-auto lg:w-3/5">
              <h3 className="font-playfair font-semibold text-2xl sm:text-3xl">
                Rancang jangkamasa jualan
                <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
              </h3>
              <article className="font-inter">
                <p className="my-6">
                  Langkah seterusnya dalam menjual rumah adalah merancang
                  jangkamasa proses penjualan. Ini termasuklah:
                </p>
                <ul className="list-decimal list-inside">
                  <li className="mb-6">
                    Jangkamasa untuk dapatkan pembeli dengan melihat keadaan
                    pasaran semasa
                  </li>
                  <li className="mb-6">
                    Jangkamasa proses kelulusan pinjaman dan guaman bagi
                    mengelakkan sebarang kelewatan yang tidak diingini
                  </li>
                  <li>
                    Jangkamasa pindah milik dengan memastikan dokumen dan
                    prosedur yang diperlukan dapat diselesaikan dalam masa yang
                    ditetapkan.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </SlideUp>
      </div>
      <div className="bg-neutral-100 py-16 px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
            <div className="my-auto lg:w-3/5">
              <h3 className="font-playfair font-semibold text-2xl sm:text-3xl">
                Sediakan dokumen
                <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
              </h3>
              <article className="font-inter">
                <p className="my-6">
                  Menyediakan dokumen yang betul adalah kunci untuk memudahkan
                  proses jual rumah. Berikut adalah senarai dokumen yang perlu
                  disediakan:
                </p>
                <ul className="list-decimal list-inside">
                  <li className="mb-6">Salinan kad pengenalan</li>
                  <li className="mb-6">
                    Salinan perjanjian jual beli semasa belian
                  </li>
                  <li className="mb-6">Salinan geran</li>
                  <li className="mb-6">Penyata pinjaman terkini</li>
                  <li className="mb-6">Bil cukai pintu dan cukai tanah</li>
                  <li className="mb-6">Bil penyelenggaraan</li>
                  <li>Bil utiliti</li>
                </ul>
              </article>
            </div>
            <div className="lg:w-2/5 xl:-mt-24 m-auto">
              <Image
                className="w-auto h-auto rounded shadow-lg"
                src="/3.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </SlideUp>
      </div>
      <div className="py-16 px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
            <div className="lg:w-2/5 xl:-mt-24 m-auto">
              <Image
                className="w-auto h-auto rounded shadow-lg"
                src="/4.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="my-auto lg:w-3/5">
              <h3 className="font-playfair font-semibold text-2xl sm:text-3xl">
                Sediakan rumah untuk jualan
                <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
              </h3>
              <article className="font-inter">
                <p className="my-6">
                  Sebelum memasarkan rumah anda, pastikan rumah dalam keadaan
                  terbaik. Ini termasuklah membuat perubahan kecil dan
                  membersihkan rumah yang ingin dijual. Berikut adalah beberapa
                  panduan:
                </p>
                <ul className="list-decimal list-inside">
                  <li className="mb-6">
                    Baiki impresi pertama rumah anda dengan mengemas rumah
                    supaya nampak lapang, buang atau simpan barangan yang tidak
                    perlu, baikpulih kerosakan, cat semula rumah, dan potong
                    rumput di halaman rumah
                  </li>
                  <li>
                    Ambil gambar yang cantik dengan memastikan rumah kemas dan
                    lapang, memasang semua lampu dan buka langsir untuk
                    pencahayaan yang baik, mengambil gambar dari sudut bucu
                    rumah supaya nampak lapang dan luas, serta menghindari lawan
                    cahaya matahari untuk memastikan gambar jelas
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </SlideUp>
      </div>
      <div className="bg-neutral-100 py-16 px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
            <div className="my-auto lg:w-3/5">
              <h3 className="font-playfair font-semibold text-2xl sm:text-3xl">
                Lantik perunding hartanah
                <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
              </h3>
              <article className="font-inter">
                <p className="my-6">
                  Lantik perunding hartanah untuk memudahkan proses penjualan
                  rumah anda. Langkah-langkah yang perlu diambil:
                </p>
                <ul className="list-decimal list-inside">
                  <li className="mb-6">
                    Sediakan segala dokumen, maklumat, dan gambar yang
                    diperlukan oleh perunding hartanah anda
                  </li>
                  <li className="mb-6">
                    Buat temujanji dengan perunding hartanah anda untuk melihat
                    rumah secara langsung
                  </li>
                  <li>
                    Berbincang dengan perunding hartanah anda mengenai harga,
                    tempoh masa, nasihat, dan perkara-perkara lain yang
                    berkaitan dengan proses penjualan
                  </li>
                </ul>
              </article>
            </div>
            <div className="lg:w-2/5 xl:-mt-24 m-auto">
              <Image
                className="w-auto h-auto rounded shadow-lg"
                src="/5.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </SlideUp>
      </div>
      {/* Contact Us */}
      <div className="bg-gradient-to-tr from-green-500 via-teal-500 to-sky-500">
        <div className="flex py-24 flex-col mx-auto max-w-5xl px-4 xl:px-0">
          <h2 className="font-playfair mb-10 font-extrabold text-neutral-200 text-3xl sm:text-4xl">
            Bersedia untuk menjual rumah anda?
          </h2>
          <div className="mb-10">
            <Link
              href="https://api.whatsapp.com/send?phone=60176515784"
              className="bg-sky-500 hover:bg-neutral-100 rounded-full shadow-md font-inter font-medium text-sm sm:text-base tracking-wider py-5 px-10"
            >
              HUBUNGI KAMI
            </Link>
          </div>
          <p className="font-inter font-medium text-base sm:text-lg text-neutral-200">
            Atau{" "}
            <Link
              href="/semak-kelayakan"
              className="underline hover:no-underline hover:text-sky-600"
            >
              semak kelayakan
            </Link>{" "}
            untuk memastikan proses jualan rumah anda berjalan dengan lancar dan
            berkesan.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
