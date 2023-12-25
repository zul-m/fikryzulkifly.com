import SlideUp from "@/components/SlideUp";
import Image from "next/image";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="lg:my-[66px]">
      <div className="pt-16 pb-8 lg:py-16 px-4 sm:px-8">
        <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
          <div className="lg:w-3/5 my-auto font-poppins lg:px-5">
            <h3 className="font-semibold text-2xl sm:text-3xl">
              Pengalaman dan keprofesionalan
              <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
            </h3>
            <p className="mt-10">
              Kami membawa bersama pengalaman bertahun-tahun dalam industri
              hartanah.
            </p>
            <p className="mt-5">
              Pasukan kami terdiri daripada profesional yang berpengetahuan luas
              tentang pasaran hartanah semasa.
            </p>
          </div>
          <div className="lg:w-2/5 m-auto lg:px-5">
            <Image
              className="aspect-square rounded shadow-lg"
              src="/startup.jpg"
              alt=""
              width={3000}
              height={2143}
            />
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-16 px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
            <div className="hidden lg:flex w-2/5 m-auto lg:px-5">
              <Image
                className="aspect-square rounded shadow-lg"
                src="/petronas.jpg"
                alt=""
                width={3648}
                height={2736}
              />
            </div>
            <div className="lg:w-3/5 my-auto font-poppins lg:px-5">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                Pengetahuan yang mendalam
                <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
              </h3>
              <p className="mt-10">
                Kami memahami keunikan kawasan-kawasan di Kuala Lumpur dan
                Selangor, termasuk faktor-faktor seperti pasaran tempatan,
                kemudahan awam, dan persekitaran sekitar.
              </p>
              <p className="mt-5">
                Ini membolehkan kami memberikan nasihat yang tepat dan berkesan
                kepada pelanggan kami.
              </p>
            </div>
            <div className="lg:hidden m-auto lg:px-5">
              <Image
                className="aspect-square rounded shadow-lg"
                src="/petronas.jpg"
                alt=""
                width={3648}
                height={2736}
              />
            </div>
          </div>
        </SlideUp>
      </div>
      <div className="py-8 lg:py-16 px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
            <div className="lg:w-3/5 my-auto font-poppins lg:px-5">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                Rangkaian yang luas
                <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
              </h3>
              <p className="mt-10">
                Kami menjalankan hubungan dengan pelbagai pihak, termasuk pihak
                bank, peguam hartanah, penilai harga, dan pihak-pihak lain yang
                relevan dalam industri hartanah.
              </p>
              <p className="mt-5">
                Ini membuka pintu kepada pelbagai peluang dan perkhidmatan
                berkualiti tinggi untuk kejayaan hartanah anda.
              </p>
            </div>
            <div className="lg:w-2/5 m-auto lg:px-5">
              <Image
                className="aspect-square rounded shadow-lg"
                src="/house-key.jpg"
                alt=""
                width={4592}
                height={3448}
              />
            </div>
          </div>
        </SlideUp>
      </div>
      <div className="py-8 lg:py-16 px-4 sm:px-8">
        <SlideUp offset="-300px 0px -300px 0px">
          <div className="gap-14 flex flex-col lg:flex-row mx-auto max-w-7xl">
            <div className="hidden lg:flex w-2/5 m-auto lg:px-5">
              <Image
                className="aspect-square rounded shadow-lg"
                src="/chart.jpg"
                alt=""
                width={4000}
                height={2702}
              />
            </div>
            <div className="lg:w-3/5 my-auto font-poppins lg:px-5">
              <h3 className="font-semibold text-2xl sm:text-3xl">
                Analisa pasaran semasa
                <hr className="w-20 h-1 my-3 bg-teal-500 rounded"></hr>
              </h3>
              <p className="mt-10">
                Kami menawarkan perkhidmatan analisa pasaran semasa yang teliti
                dan terperinci.
              </p>
              <p className="mt-5">
                Ini membolehkan kami dan pelanggan kami membuat keputusan yang
                berinformasi, memanfaatkan trend pasaran terkini untuk kelebihan
                bersama.
              </p>
            </div>
            <div className="lg:hidden m-auto lg:px-5">
              <Image
                className="aspect-square rounded shadow-lg"
                src="/chart.jpg"
                alt=""
                width={4000}
                height={2702}
              />
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default WhyUsSection;
