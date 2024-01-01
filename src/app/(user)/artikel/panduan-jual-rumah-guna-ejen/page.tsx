import SlideUp from "@/src/components/SlideUp";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <div className="w-full pt-16 sm:pt-24 bg-cyan-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-neutral-200 flex pt-14 sm:pt-20 pb-40 sm:pb-80 md:pb-96 lg:pb-[520px] px-4 sm:px-8 flex-col tracking-wide">
            <h2 className="mb-4 text-4xl font-bold font-playfair sm:text-5xl">
              Panduan Jual Rumah Guna Ejen Hartanah
            </h2>
            <p className="mb-6 text-lg font-inter sm:text-xl">
              Langkah-langkah menggunakan khidmat ejen hartanah bagi penjualan
              hartanah yang lancar
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto -mt-28 sm:-mt-56 md:-mt-72 lg:-mt-[420px] px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <Image
            src="/real-estate.jpg"
            width={6000}
            height={3252}
            className="aspect-[2/1] w-full h-full object-cover object-center rounded-md"
            alt=""
          />
        </SlideUp>
      </div>
      <div className="flex flex-col max-w-6xl py-16 mx-auto md:flex-row sm:py-20">
        <div className="md:w-3/5">
          <article className="px-4 font-inter sm:px-8 lg:px-12">
            <p className="mb-6">
              Menjual rumah adalah satu proses yang penuh cabaran dan memerlukan
              kepakaran khusus. Walaupun ramai pemilik rumah yang cuba menjual
              hartanah mereka sendiri, kekurangan pengetahuan dan pengalaman
              sering kali menyebabkan kegagalan dalam proses penjualan. Panduan
              ini akan menerangkan dengan terperinci mengenai panduan jual rumah
              menggunakan perkhidmatan ejen hartanah.
            </p>
            <h3
              id="kelebihan-menggunakan-khidmat-ejen-untuk-menjual-rumah"
              className="text-2xl font-semibold font-playfair sm:text-3xl"
            >
              Kelebihan menggunakan khidmat ejen untuk menjual rumah
              <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
            </h3>
            <p className="my-6">
              Menggunakan khidmat ejen hartanah memberikan kelebihan yang besar
              kepada penjual rumah. Khidmat mereka dalam aktiviti pemasaran,
              pengurusan profesional, kepakaran dalam pasaran hartanah,
              perlindungan kepentingan penjual, jaringan yang luas, dan
              perbelanjaan dalam iklan yang efektif adalah unsur-unsur yang
              membantu memastikan penjualan hartanah berjalan dengan lebih
              berjaya. Jangan ragu-ragu untuk melibatkan ejen hartanah
              profesional bagi memastikan proses penjualan hartanah anda dapat
              dilaksanakan dengan efisien dan efektif.
            </p>
            <h4
              id="aktiviti-pemasaran-yang-berterusan"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              1. Aktiviti pemasaran yang berterusan
            </h4>
            <p className="mb-6">
              Ejen hartanah bukan sahaja menyusun aktiviti pemasaran secara
              berterusan tetapi juga merancang strategi pemasaran yang berfokus.
              Mereka memahami bahawa pemasaran bukan sekadar pengiklanan; ia
              melibatkan target yang efektif kepada kumpulan sasaran yang
              sesuai. Melalui penggunaan platform digital, media cetak, dan
              jaringan profesional, ejen hartanah dapat memaksimumkan
              pengiklanan hartanah anda.
            </p>
            <p className="mb-6">
              Selain itu, kemahiran mereka dalam mengendalikan platform digital
              seperti laman web hartanah dan media sosial membantu menjadikan
              pemasaran anda lebih interaktif dan menarik. Aktiviti pemasaran
              yang berterusan ini memberikan kesan positif kepada persepsi
              pembeli terhadap hartanah anda.
            </p>
            <h4
              id="jimat-masa-dengan-pengurusan-yang-profesional"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              2. Jimat masa dengan pengurusan yang profesional
            </h4>
            <p className="mb-6">
              Ejen hartanah menguruskan aspek teknikal dan administratif dalam
              proses penjualan, memberikan anda kebebasan untuk menumpukan
              perhatian kepada tugas-tugas yang lebih penting, secara tidak
              langsung membantu anda menjimatkan masa harian. Mereka tidak hanya
              mengiklankan hartanah anda, tetapi juga menyediakan panduan
              tentang cara meningkatkan daya tarikan hartanah tersebut.
            </p>
            <p className="mb-6">
              Prospek pembeli yang melalui ejen hartanah biasanya sudah disaring
              sebelum lawatan, menyelamatkan masa anda daripada berurusan dengan
              pembeli yang tidak serius atau tidak layak. Selain itu, ejen
              hartanah dapat menguruskan proses jual beli secara profesional,
              termasuk membuat jadual lawatan, rundingan harga, dan memantau
              perkembangan secara keseluruhan.
            </p>
            <h4
              id="kepakaran-dalam-pasaran-hartanah-tempatan"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              3. Kepakaran dalam pasaran hartanah tempatan
            </h4>
            <p className="mb-6">
              Kelebihan utama ejen hartanah adalah kepakaran mereka dalam
              pasaran hartanah tempatan. Sebelum menetapkan harga jualan, ejen
              hartanah melakukan kajian pasaran menyeluruh untuk memahami
              dinamik pasaran semasa. Mereka tidak hanya melihat harga rumah
              sekitar, tetapi juga mengenal pasti faktor-faktor yang
              mempengaruhi nilai hartanah, seperti kemudahan awam,
              infrastruktur, dan trend pembangunan di kawasan tersebut.
            </p>
            <p className="mb-6">
              Pentingnya kepakaran ini adalah untuk menetapkan harga yang
              realistik dan bersaing di pasaran. Ejen hartanah akan memberikan
              pandangan profesional mengenai nilai sebenar hartanah anda,
              memastikan harga yang diletakkan sesuai dengan keadaan pasaran
              semasa. Ini membantu mengelakkan situasi di mana harga yang
              diletakkan terlalu tinggi dan menghalang minat pembeli atau
              terlalu rendah yang mungkin merugikan penjual.
            </p>
            <h4
              id="lindungi-kepentingan-penjual-dengan-terma-yang-bersesuaian"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              4. Lindungi kepentingan penjual dengan terma yang bersesuaian
            </h4>
            <p className="mb-6">
              Ejen hartanah berperanan sebagai penasihat dan pelindung
              kepentingan penjual. Mereka membantu menyusun terma-terma
              penjualan yang melibatkan surat tawaran dan perjanjian jual beli.
              Ini bukan hanya untuk melindungi penjual daripada pembeli yang
              tidak bertanggungjawab, tetapi juga untuk memberikan kejelasan
              dalam transaksi.
            </p>
            <p className="mb-6">
              Dengan terma yang bersesuaian, ejen hartanah memastikan bahawa
              proses penjualan berjalan lancar dan pihak-pihak yang terlibat
              memahami tanggungjawab masing-masing. Ini termasuk pelaksanaan
              jangka masa pembayaran, penjadualan lawatan, dan sebarang syarat
              tambahan yang perlu dipatuhi oleh pembeli. Kejelasan ini tidak
              hanya mengurangkan risiko perselisihan faham, tetapi juga
              memberikan ketenangan fikiran kepada penjual.
            </p>
            <h4
              id="jaringan-yang-luas-dan-hubungan-profesional"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              5. Jaringan yang luas dan hubungan profesional
            </h4>
            <p className="mb-6">
              Ejen hartanah membawa bersama jaringan yang luas dan hubungan
              profesional yang mempercepatkan proses penjualan. Melalui hubungan
              mereka dengan ejen hartanah lain, juruaudit, bank, dan profesional
              lain dalam industri hartanah, ejen hartanah dapat memudahkan
              urusan yang melibatkan kelulusan pinjaman, proses guaman, dan
              urusan-urusan lain yang berkaitan.
            </p>
            <p className="mb-6">
              Jaringan yang kukuh ini juga membantu penjual mendapatkan akses
              kepada pelbagai prospek pembeli yang mungkin tidak dapat dicapai
              secara langsung. Ejen hartanah yang aktif dalam industri mempunyai
              maklumat tentang pembeli yang sedang mencari hartanah dan dapat
              menghubungkan mereka dengan penjual yang sesuai.
            </p>
            <h4
              id="perbelanjaan-iklan-yang-efektif"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              6. Perbelanjaan iklan yang efektif
            </h4>
            <p className="mb-6">
              Ejen hartanah melabur dalam perbelanjaan iklan yang efektif.
              Mereka menggunakan pelbagai medium seperti papan tanda hartanah,
              iklan di media tempatan, dan laman web hartanah untuk
              memaksimumkan liputan hartanah anda. Ini tidak hanya meningkatkan
              peluang penjualan, tetapi juga memberikan penjual keyakinan bahawa
              hartanah mereka diberi penekanan yang mencukupi dalam pasaran.
            </p>
            <p className="mb-6">
              Keberkesanan iklan yang dilakukan oleh ejen hartanah yang
              profesional membantu meningkatkan ketampakan hartanah dan
              mendorong minat pembeli. Mereka juga dapat memberikan panduan
              mengenai cara memperbaiki daya tarikan hartanah melalui
              penyelenggaraan, hiasan dalaman, dan penambahbaikan yang mungkin
              diperlukan.
            </p>
            <h3
              id="tugas-ejen-hartanah-dalam-penjualan-rumah"
              className="text-2xl font-semibold font-playfair sm:text-3xl"
            >
              Tugas ejen hartanah dalam penjualan rumah
              <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
            </h3>
            <p className="my-6">
              Berikut adalah tugas-tugas ejen hartanah dalam proses jual rumah:
            </p>
            <h4
              id="buat-kajian-pasaran-semasa"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              1. Buat kajian pasaran semasa
            </h4>
            <p className="mb-6">
              Tugas pertama ejen hartanah adalah melakukan kajian pasaran yang
              menyeluruh. Mereka meminta butiran hartanah termasuk alamat, harga
              jual, keluasan tanah dan bangunan, jenis rumah, dan butiran
              ubahsuai yang telah dilakukan. Melalui analisis ini, ejen hartanah
              dapat menentukan nilai yang sesuai dan membuat perbandingan dengan
              hartanah yang serupa di pasaran. Kajian pasaran ini membantu
              menetapkan harga jualan yang realistik dan bersaing.
            </p>
            <h4
              id="janji-temu-untuk-memeriksa-rumah"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              2. Janji temu untuk memeriksa rumah
            </h4>
            <p className="mb-6">
              Ejen hartanah membuat janji temu untuk melakukan pemeriksaan
              hartanah. Langkah ini membolehkan mereka:
            </p>
            <ul className="list-disc">
              <li className="mb-6 ml-6">
                Memeriksa lokasi dan keadaan hartanah secara langsung
              </li>
              <li className="mb-6 ml-6">
                Mengambil gambar-gambar hartanah untuk kegunaan pemasaran
              </li>
              <li className="mb-6 ml-6">
                Mendapatkan butiran lanjut tentang spesifikasi dan keunikan
                hartanah
              </li>
              <li className="mb-6 ml-6">
                Memeriksa dokumen hak milik untuk memastikan kelengkapannya
              </li>
              <li className="mb-6 ml-6">
                Menjelaskan proses penjualan kepada penjual dan menjelaskan
                peranan serta tanggungjawab ejen hartanah
              </li>
            </ul>
            <blockquote className="p-6 mb-6 bg-teal-100 bg-opacity-50 border-l-4 border-l-teal-600">
              <p>
                Buat masa ini, penjual tidak dikenakan sebarang bayaran kepada
                ejen hartanah.
              </p>
            </blockquote>
            <h4
              id="pemasaran"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              3. Pemasaran
            </h4>
            <p className="mb-6">
              Ejen hartanah memulakan proses pemasaran dengan melibatkan
              beberapa strategi:
            </p>
            <ul className="list-disc">
              <li className="mb-6 ml-6">
                Mengiklankan hartanah di portal-portal hartanah utama untuk
                mencapai target yang lebih besar
              </li>
              <li className="mb-6 ml-6">
                Membina jaringan dengan ejen hartanah lain, juruaudit, dan
                pemain utama dalam industri hartanah untuk memperluaskan
                pengaruh dan liputan hartanah
              </li>
              <li className="mb-6 ml-6">
                Menggunakan platform media sosial dan laman web hartanah untuk
                meningkatkan paparan dan interaksi dengan bakal pembeli
              </li>
              <li className="mb-6 ml-6">
                Melibatkan iklan di media cetak tempatan dan papan tanda
                hartanah bagi meningkatkan kebolehcapaian hartanah
              </li>
            </ul>
            <p className="mb-6">
              Ejen hartanah akan mengemaskini status hartanah dengan aktif dan
              memberi cadangan untuk meningkatkan daya tarikan atau percepatkan
              proses penjualan jika perlu.
            </p>
            <h4
              id="menguruskan-proses-rundingan"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              4. Menguruskan proses rundingan
            </h4>
            <p className="mb-6">
              Apabila terdapat minat dari pembeli, ejen hartanah memainkan
              peranan penting dalam proses rundingan harga. Mereka menggunakan
              kemahiran "negotiation" mereka untuk mencapai persetujuan yang
              memuaskan antara pembeli dan penjual. Ejen hartanah juga
              memberikan panduan kepada penjual dan pembeli tentang terma-terma
              yang perlu dipertimbangkan, menjelaskan setiap langkah proses
              dengan jelas.
            </p>
            <p className="mb-6">
              Setelah terdapat kesepakatan, ejen hartanah menguruskan
              tandatangan surat tawaran atau "booking form" yang menyatakan
              persetujuan antara kedua-dua pihak.
            </p>
            <h4
              id="bantu-pembeli-mendapatkan-pinjaman-dan-peguam"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              5. Bantu pembeli mendapatkan pinjaman dan peguam
            </h4>
            <p className="mb-6">
              Ejen hartanah berperanan sebagai perantara antara penjual dan
              pembeli dalam proses mendapatkan pinjaman dan perkhidmatan peguam.
              Mereka membantu pembeli menyusun dokumen kewangan yang diperlukan
              untuk kelulusan pinjaman. Setelah pinjaman diluluskan, ejen
              hartanah membantu menyambungkan penjual dan pembeli kepada peguam
              hartanah yang berkelayakan untuk melengkapkan transaksi jual beli.
            </p>
            <h4
              id="proses-pindah-milik"
              className="mb-6 text-xl font-medium text-teal-600"
            >
              6. Proses pindah milik
            </h4>
            <p className="mb-6">
              Proses pindah milik hartanah diuruskan oleh peguam hartanah yang
              dilantik. Ejen hartanah akan terus berkomunikasi dengan penjual
              dan pembeli untuk memastikan bahawa semua langkah dalam proses
              pindah milik berjalan lancar. Walaupun tugas utama ejen hartanah
              selesai setelah perjanjian jual beli ditandatangani, mereka masih
              boleh memberikan bimbingan atau menyemak status semasa jika
              penjual memerlukan sebarang bantuan.
            </p>
            <p className="mb-6">
              Dengan melaksanakan tugas-tugas ini dengan teliti dan profesional,
              ejen hartanah berperanan penting dalam memastikan proses jual beli
              hartanah berjalan lancar dan memuaskan semua pihak yang terlibat.
            </p>
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
                  href="/panduan/jual-rumah-guna-ejen/#kelebihan-menggunakan-khidmat-ejen-untuk-menjual-rumah"
                  className="flex items-center justify-start py-4 font-medium border-t hover:underline"
                >
                  Kelebihan menggunakan khidmat ejen untuk menjual rumah
                </Link>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#aktiviti-pemasaran-yang-berterusan"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Aktiviti pemasaran yang berterusan
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#jimat-masa-dengan-pengurusan-yang-profesional"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Jimat masa dengan pengurusan yang profesional
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#kepakaran-dalam-pasaran-hartanah-tempatan"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Kepakaran dalam pasaran hartanah tempatan
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#lindungi-kepentingan-penjual-dengan-terma-yang-bersesuaian"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Lindungi kepentingan penjual dengan terma yang bersesuaian
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#jaringan-yang-luas-dan-hubungan-profesional"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Jaringan yang luas dan hubungan profesional
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#perbelanjaan-iklan-yang-efektif"
                    className="flex items-center justify-start mb-4 hover:underline"
                  >
                    Perbelanjaan iklan yang efektif
                  </Link>
                </li>
              </ul>
              <ul className="mt-4 font-inter">
                <Link
                  href="/panduan/jual-rumah-guna-ejen/#tugas-ejen-hartanah-dalam-penjualan-rumah"
                  className="flex items-center justify-start py-4 font-medium border-t hover:underline"
                >
                  Tugas ejen hartanah dalam penjualan rumah
                </Link>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#buat-kajian-pasaran-semasa"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Buat kajian pasaran semasa
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#janji-temu-untuk-memeriksa-rumah"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Janji temu untuk memeriksa rumah
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#pemasaran"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Pemasaran
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#menguruskan-proses-rundingan"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Menguruskan proses rundingan
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#bantu-pembeli-mendapatkan-pinjaman-dan-peguam"
                    className="flex items-center justify-start mb-2 hover:underline"
                  >
                    Bantu pembeli mendapatkan pinjaman dan peguam
                  </Link>
                </li>
                <li className="ml-6 list-decimal text-neutral-600">
                  <Link
                    href="/panduan/jual-rumah-guna-ejen/#proses-pindah-milik"
                    className="flex items-center justify-start mb-4 hover:underline"
                  >
                    Proses pindah milik
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
            Bersedia untuk menjual rumah anda?
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
              href="/panduan/jual-rumah"
              className="underline hover:no-underline hover:text-sky-600"
            >
              lihat info lanjut
            </Link>{" "}
            panduan menguruskan proses penjualan rumah anda supaya berjalan
            dengan lancar dan berkesan.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
