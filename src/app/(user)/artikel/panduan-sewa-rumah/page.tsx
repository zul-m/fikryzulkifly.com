import SlideUp from "@/src/components/SlideUp";
import Image from "next/image";
import Link from "next/link";
import { IoMdBulb } from "react-icons/io";

const page = () => {
  return (
    <main>
      <div className="w-full pt-16 sm:pt-24 bg-cyan-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-neutral-200 flex pt-14 sm:pt-20 pb-40 sm:pb-80 md:pb-96 lg:pb-[520px] px-4 sm:px-8 flex-col tracking-wide">
            <h2 className="mb-4 text-4xl font-bold font-playfair sm:text-5xl">
              Panduan Sewa Rumah
            </h2>
            <p className="mb-6 text-lg font-inter sm:text-xl">
              Langkah-langkah utama dalam perjanjian sewaan dan kelebihan
              menggunakan khidmat ejen hartanah
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto -mt-28 sm:-mt-56 md:-mt-72 lg:-mt-[420px] px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <Image
            src="/5.png"
            width={1080}
            height={1080}
            className="aspect-[2/1] w-full h-full object-cover object-center rounded-md"
            alt=""
          />
        </SlideUp>
      </div>
      <div className="flex flex-col max-w-6xl py-16 mx-auto md:flex-row sm:py-20">
        <div className="md:w-3/5">
          <article className="px-4 font-inter sm:px-8 lg:px-12">
            <table className="w-full mb-6">
              <tbody>
                <tr className="font-medium text-center bg-gray-200">
                  <td className="p-4 border border-slate-400">TEMPOH SEWAAN</td>
                  <td className="p-4 border border-slate-400">KADAR YURAN</td>
                </tr>
                <tr>
                  <td className="p-4 border border-slate-400">1 tahun</td>
                  <td className="p-4 border border-slate-400">
                    <span className="text-teal-600">×1</span> bulan sewaan
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-slate-400">
                    Tahun berikutnya
                  </td>
                  <td className="p-4 border border-slate-400">
                    <span className="text-teal-600">×0.25</span> bulan sewaan
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="my-6">
              Sebelum melibatkan diri dalam urusan sewaan, baik tuan rumah atau
              penyewa perlu memahami perkara-perkara penting yang terlibat.
              Panduan ini menyajikan pandangan komprehensif mengenai perjanjian
              sewa rumah, serta menyelidik aspek utama seperti surat perjanjian
              sewaan dan deposit sewa.
            </p>
            <h3
              id="perkara-utama-dalam-perjanjian-sewaan"
              className="text-2xl font-semibold font-playfair sm:text-3xl"
            >
              Perkara utama dalam perjanjian sewaan
              <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
            </h3>
            <p className="my-6">
              Sebelum menyewakan rumah kepada penyewa, penting untuk memahami
              dua perkara utama dalam perjanjian sewa rumah:
            </p>
            <h4
              id="surat-perjanjian-sewaan-yang-dimatikan-setem-duti"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              1. Surat perjanjian sewaan yang dimatikan setem duti
            </h4>
            <p className="mb-6">
              Di Malaysia, surat perjanjian sewaan perlu dimatikan setem duti
              agar sah di sisi undang-undang. Pembayaran duti setem, yang
              berharga antara RM 50 hingga RM 300 bergantung kepada nilai sewa
              (tidak termasuk upah ejen), harus dilakukan melalui Lembaga Hasil
              Dalam Negeri (LHDN). Proses ini bukan hanya wajib di sisi
              undang-undang tetapi juga memberikan perlindungan kepada penyewa,
              dengan menetapkan terma dan syarat sewa yang jelas.
            </p>
            <blockquote className="p-6 mb-6 bg-teal-100 bg-opacity-50 border-l-4 border-l-teal-600">
              <p className="mb-6">
                Untuk panduan yang tepat, disarankan untuk berhubung dengan ejen
                hartanah atau profesional cukai.
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=60176515784"
                className="font-medium hover:underline text-sky-700"
              >
                Hubungi kami jika anda memerlukan khidmat ejen hartanah
                berdaftar &gt;
              </Link>
            </blockquote>
            <h4
              id="deposit-sekuriti-dan-utiliti"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              2. Deposit sekuriti dan utiliti
            </h4>
            <h5 className="mb-6 text-lg font-medium">Deposit sekuriti</h5>
            <p className="mb-6">
              Kebiasaannya, penyewa dikehendaki membayar deposit sekuriti sewa 2
              + 1; deposit 2 bulan sewa dan 1 bulan sewa semasa. Deposit ini
              perlu dibayar walaupun penyewa memutuskan untuk berpindah sebelum
              tempoh sewa tamat. Perlu untuk penyewa sedar bahawa deposit sewa
              tidak boleh digunakan sebagai pembayaran untuk 2 bulan terakhir
              sewaan. Deposit ini harus dipulangkan kepada penyewa selepas
              diperiksa keadaan rumah dan pembayaran bil terkini tiada tunggakan
              kurang daripada 30 hari.
            </p>
            <h5 className="mb-6 text-lg font-medium">Deposit utiliti</h5>
            <p className="mb-6">
              Deposit utiliti merangkumi deposit bil elektrik, deposit bil air,
              dan deposit Indah Water Konsortium (IWK).
            </p>
            <ul className="list-decimal">
              <li className="mb-6 ml-6">
                Deposit bil elektrik: Disyorkan agar penyewa mendaftar akaun TNB
                atas nama mereka sendiri menggunakan salinan surat perjanjian
                sewa
              </li>
              <li className="mb-6 ml-6">
                Deposit bil air: Dikenakan oleh tuan rumah sebagai deposit
                utiliti bil air
              </li>
              <li className="mb-6 ml-6">
                Deposit IWK: Perlu diingatkan bahawa IWK adalah utiliti yang
                dikenakan caj bulanan. Jika rumah yang disewa adalah apartment
                atau kondo, caj ini dimasukkan dalam caj "maintenance fee".
                Penting untuk penyewa sedar bahawa deposit utiliti biasanya
                adalah 50% daripada nilai sewa sebulan
              </li>
            </ul>
            <h3
              id="langkah-langkah-sewa-rumah"
              className="text-2xl font-semibold font-playfair sm:text-3xl"
            >
              Langkah-langkah sewa rumah
              <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
            </h3>
            <p className="my-6">
              Langkah-langkah sewa rumah ini memberikan pandangan mendalam
              kepada kedua-dua belah pihak mengenai proses penyewaan. Memahami
              dengan teliti setiap langkah dapat membantu mengelakkan sebarang
              kesilapan dan konflik di masa akan datang. Proses ini melibatkan
              kerjasama dan komunikasi yang baik antara pemilik rumah, penyewa,
              dan ejen hartanah untuk memastikan penyewaan berjalan dengan
              lancar dan memuaskan untuk kedua-dua belah pihak.
            </p>
            <p className="mb-6">
              Berikut adalah langkah-langkah utama dalam proses sewa rumah:
            </p>
            <h4
              id="sediakan-maklumat-dan-salinan-mykad-penyewa-dan-saksi"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              1. Sediakan maklumat dan salinan Mykad penyewa dan saksi
            </h4>
            <p className="mb-6">
              Sebelum memulakan proses sewa rumah, tuan rumah atau ejen perlu
              meminta maklumat peribadi penyewa termasuk nama penuh, alamat
              tempat tinggal semasa, nombor telefon, dan salinan Mykad.
              Maklumat-maklumat ini adalah penting untuk proses pendaftaran dan
              rekod penyewa.
            </p>
            <h4
              id="draf-perjanjian-sewaan"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              2. Draf perjanjian sewaan
            </h4>
            <p className="mb-6">
              Agen hartanah akan menyediakan draf perjanjian sewaan yang
              mengandungi terma dan syarat yang diperlukan. Penyewa perlu
              mengisi borang sewaan yang berkaitan dengan maklumat peribadi,
              terma bayaran, dan sebagainya. Pemilik rumah dan penyewa perlu
              membaca dengan teliti setiap butiran perjanjian sebelum
              menandatangani borang tersebut.
            </p>
            <h4
              id="mematikan-setem-duti"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              3. Mematikan setem duti
            </h4>
            <p className="mb-6">
              Setelah perjanjian disemak dan dipersetujui, perlu dilakukan
              langkah penting ini untuk memastikan kesahihan dokumen. Setem duti
              yang berkaitan dengan nilai sewa perlu dibeli dan dimatikan di
              Lembaga Hasil Dalam Negeri (LHDN). Proses ini adalah bagi
              memastikan perjanjian sah di sisi undang-undang.
            </p>
            <h4
              id="ambil-kunci-dan-buat-semakan"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              4. Ambil kunci dan buat semakan
            </h4>
            <p className="mb-6">
              Setelah semua dokumen dipersetujui, penyewa boleh mengambil kunci
              rumah dan melakukan semakan awal. Sekiranya terdapat kerosakan
              atau kecacatan sebelum penyewa berpindah masuk, ia adalah
              tanggungjawab tuan rumah untuk membaikinya. Setelah penyewa masuk,
              segala kerosakan yang berlaku adalah tanggungjawab penyewa,
              kecuali bagi kerosakan yang disebabkan oleh kelalaian atau masalah
              struktur rumah.
            </p>
            <h4
              id="tanggungjawab-utiliti"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              5. Tanggungjawab utiliti
            </h4>
            <p className="mb-6">
              Penyewa bertanggungjawab untuk membayar bil air, bil elektrik, bil
              internet, dan IWK (Indah Water Konsortium). Penyewa disarankan
              untuk mendaftar akaun utiliti atas nama mereka sendiri untuk
              memudahkan pengurusan bil dan deposit utiliti. Deposit utiliti
              biasanya adalah 50% daripada nilai sewa sebulan.
            </p>
            <h3
              id="menggunakan-khidmat-ejen-hartanah"
              className="text-2xl font-semibold font-playfair sm:text-3xl"
            >
              Menggunakan khidmat ejen hartanah
              <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
            </h3>
            <p className="my-6">
              Melibatkan ejen hartanah dalam proses penyewaan rumah membawa
              kepada pelbagai kelebihan. Pemilik rumah yang memilih untuk
              menggunakan khidmat ejen dapat menikmati kebebasan dan kepuasan,
              disamping berasa yakin bahawa hartanah mereka ditangani oleh
              profesional yang kompeten dan berpengalaman.
            </p>
            <p className="mb-6">
              Menggunakan ejen hartanah untuk menyewakan rumah anda memberikan
              kelebihan tertentu:
            </p>
            <h4
              id="rangkaian-yang-luas"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              1. Rangkaian yang luas
            </h4>
            <p className="mb-6">
              Ejen hartanah membawa kelebihan melalui rangkaian pemasaran yang
              luas. Dengan akses kepada platform seperti{" "}
              <Link
                href="https://www.propertyguru.com.my/"
                className="font-semibold hover:underline hover:text-sky-600"
              >
                PropertyGuru
              </Link>
              ,{" "}
              <Link
                href="https://www.iproperty.com.my/bm/"
                className="font-semibold hover:underline hover:text-sky-600"
              >
                iProperty
              </Link>
              , dan{" "}
              <Link
                href="https://www.mudah.my/"
                className="font-semibold hover:underline hover:text-sky-600"
              >
                Mudah.my
              </Link>
              , ejen mampu memasarkan hartanah secara aktif kepada pelbagai
              kumpulan sasaran. Ini membantu meningkatkan kebolehcapaian
              hartanah dan peluang untuk menarik penyewa yang sesuai.
            </p>
            <h4
              id="keahlian-dan-pengetahuan"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              2. Keahlian dan pengetahuan
            </h4>
            <p className="mb-6">
              Ejen hartanah bukan sahaja mempunyai pengalaman dalam penjualan
              hartanah, tetapi mereka juga memahami undang-undang dan peraturan
              penyewaan. Hal ini membolehkan mereka memberikan nasihat yang
              berguna kepada pemilik rumah dan penyewa tentang proses penyewaan,
              hak dan tanggungjawab, serta penilaian pasaran yang tepat. Ejen
              juga dapat membantu menetapkan harga sewa yang sesuai dengan harga
              pasaran semasa.
            </p>
            <h4
              id="penyaringan-penyewa"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              3. Penyaringan penyewa
            </h4>
            <p className="mb-6">
              Ejen hartanah memainkan peranan penting dalam menyaring penyewa.
              Mereka menyelidik dan menilai penyewa berdasarkan kriteria yang
              ditetapkan oleh pemilik rumah, termasuk latar belakang, kredit,
              rekod penyewaan terdahulu, dan kebolehcapaian kewangan.
            </p>
            <h4
              id="pengurusan-pemasaran-dan-perundingan"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              4. Pengurusan pemasaran dan perundingan
            </h4>
            <p className="mb-6">
              Ejen hartanah mengambil tanggungjawab untuk mengurangkan beban
              kerja pemilik rumah dalam menguruskan proses pemasaran dan
              perundingan harga. Mereka memastikan hartanah mendapat perhatian
              yang mencukupi dan menarik, serta membantu dalam perundingan harga
              sewa untuk mencapai perjanjian yang adil dan memuaskan kedua-dua
              belah pihak.
            </p>
            <h4
              id="mengurangkan-beban-anda"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              5. Mengurangkan beban anda
            </h4>
            <p className="mb-6">
              Dengan melibatkan ejen hartanah, pemilik rumah dapat mengurangkan
              beban kerja yang berkaitan dengan proses penyewaan. Ejen
              menyediakan khidmat yang menyeluruh, termasuk penyediaan iklan,
              penilaian pasaran, penyaringan penyewa, dan perundingan harga. Ini
              memberikan pemilik rumah lebih banyak masa dan ketenangan fikiran
              untuk menangani aspek-aspek lain dalam kehidupan mereka.
            </p>
            <h4
              id="memberikan-nasihat-dan-menetapkan-harga-yang-sesuai"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              6. Memberikan nasihat dan menetapkan harga yang sesuai
            </h4>
            <p className="mb-6">
              Ejen hartanah bukan hanya menguruskan proses jualan rumah, tetapi
              mereka juga penilai pasaran yang berpengalaman. Mereka boleh
              memberikan nasihat mengenai harga sewa yang sesuai dengan harga
              pasaran semasa. Dengan menetapkan harga yang sesuai, ejen dapat
              membantu memastikan hartanah disewakan dengan lebih cepat.
            </p>
            <blockquote className="p-6 mb-6 bg-teal-100 bg-opacity-50 border-l-4 border-l-teal-600">
              <h4 className="mb-6 font-medium text-xl text-sky-500 flex items-center gap-0.5">
                <IoMdBulb className="w-5 h-5" /> Yuran komisen ejen sewa
              </h4>
              <p className="">
                Bayaran komisen ejen sewa adalah satu bulan sewa untuk sewaan
                setahun. Jika sewaan melebihi setahun, ejen boleh mengenakan
                bayaran hingga dua bulan sewa.
              </p>
            </blockquote>
          </article>
        </div>
        <div className="hidden px-5 md:w-2/5 md:grid gap-y-8 lg:gap-8 sxl:gap-16 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="sticky p-4 overflow-hidden overflow-y-auto border rounded-lg shadow-md top-24"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Isi kandungan
              </summary>
              <ul className="mt-4 font-inter">
                <Link
                  href="/artikel/panduan-sewa-rumah/#perkara-utama-dalam-perjanjian-sewaan"
                  className="flex items-center justify-start py-4 font-medium border-t hover:underline"
                >
                  Perkara utama dalam perjanjian sewaan
                </Link>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#surat-perjanjian-sewaan-yang-dimatikan-setem-duti"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Surat perjanjian sewaan yang dimatikan setem duti
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#deposit-sekuriti-dan-utiliti"
                    className="flex items-center justify-start mb-4 hover:underline"
                  >
                    Deposit sekuriti dan utiliti
                  </Link>
                </li>
              </ul>
              <ul className="mt-4 font-inter">
                <Link
                  href="/artikel/panduan-sewa-rumah/#langkah-langkah-sewa-rumah"
                  className="flex items-center justify-start py-4 font-medium border-t hover:underline"
                >
                  Langkah-langkah sewa rumah
                </Link>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#sediakan-maklumat-dan-salinan-mykad-penyewa-dan-saksi"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Sediakan maklumat dan salinan Mykad penyewa dan saksi
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#draf-perjanjian-sewaan"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Draf perjanjian sewaan
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#mematikan-setem-duti"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Mematikan setem duti
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#ambil-kunci-dan-buat-semakan"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Ambil kunci dan buat semakan
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#tanggungjawab-utiliti"
                    className="flex items-center justify-start mb-4 hover:underline"
                  >
                    Tanggungjawab utiliti
                  </Link>
                </li>
              </ul>
              <ul className="mt-4 font-inter">
                <Link
                  href="/artikel/panduan-sewa-rumah/#menggunakan-khidmat-ejen-hartanah"
                  className="flex items-center justify-start py-4 font-medium border-t hover:underline"
                >
                  Menggunakan khidmat ejen hartanah
                </Link>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#rangkaian-yang-luas"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Rangkaian yang luas
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#keahlian-dan-pengetahuan"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Keahlian dan pengetahuan
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#penyaringan-penyewa"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Penyaringan penyewa
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#pengurusan-pemasaran-dan-perundingan"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Pengurusan pemasaran dan perundingan
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#mengurangkan-beban-anda"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Mengurangkan beban anda
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/artikel/panduan-sewa-rumah/#memberikan-nasihat-dan-menetapkan-harga-yang-sesuai"
                    className="flex items-center justify-start mb-4 hover:underline"
                  >
                    Memberikan nasihat dan menetapkan harga yang sesuai
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="bg-gradient-to-tr from-green-500 via-teal-500 to-sky-500">
        <div className="flex flex-col max-w-5xl px-4 py-24 mx-auto xl:px-0">
          <h2 className="mb-10 text-3xl font-extrabold font-playfair text-neutral-200 sm:text-4xl">
            Bersedia untuk menyewakan rumah anda?
          </h2>
          <div className="mb-10">
            <Link
              href="https://api.whatsapp.com/send?phone=60176515784"
              className="px-10 py-5 text-sm font-medium tracking-wider rounded-full shadow-md bg-sky-500 hover:bg-neutral-100 font-inter sm:text-base"
            >
              HUBUNGI KAMI
            </Link>
          </div>
          <p className="text-base font-medium font-inter sm:text-lg text-neutral-200">
            Atau{" "}
            <Link
              href="/artikel/panduan-jual-rumah-guna-ejen"
              className="underline hover:no-underline hover:text-sky-600"
            >
              lihat info lanjut
            </Link>{" "}
            peranan ejen hartanah dalam menguruskan proses penjualan rumah.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
