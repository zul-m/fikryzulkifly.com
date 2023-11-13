import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "PRIHATIN Putrajaya Sentral",
    description:
      "Projek Rumah Mampu Milik ini bakal dibina di Presint 7, Putrajaya dirasmikan sendiri oleh Perdana Menteri kita, Dato Seri Anwar Ibrahim pada tanggal 17/8/2023. Terletak di Putrajaya Sentral menjadikan Projek ini sangat sesuai untuk golongan berkerja di Kuala Lumpur.",
    image: "/prihatin-putrajaya.png",
    github: "https://github.com/zul-m",
    link: "https://prihatinputrajayasentral.com/",
  },
  {
    name: "RUMAWIP Putrajaya Sentral",
    description:
      "Projek RUMAWIP Putrajaya Sentral ini terletak di kawasan strategik Putrajaya, Presint 7. Projek ini bakal dibangunkan berdekatan dengan Stesen MRT Putrajaya Sentral, sekaligus memberikan akses mudah kepada bakal pemilik. Ia juga berhampiran perkhidmatan kesihatan, pusat beli belah, dan pengangkutan awam yang lain.",
    image: "/rumawip-putrajaya.png",
    github: "https://github.com/zul-m",
    link: "https://prihatinputrajayasentral.com/rumah-mampu-milik-putrajaya-rm300000/",
  },
  {
    name: "RUMAWIP Setapak",
    description:
      "MAX II RUMAWIP is an affordable housing project initiated by the Malaysian government through the Residensi Wilayah (RUMAWIP) program. Developed by Prominent Maxim Sdn Berhad, a well-known property developer in Kuala Lumpur, this property is located in SETAPAK, Kuala Lumpur.",
    image: "/rumawip-setapak.png",
    github: "https://github.com/zul-m",
    link: "https://prihatinputrajayasentral.com/rumawip-setapak/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="mt-12 pt-6 md:pt-16 text-center font-bold text-4xl md:text-5xl">
        PROJEK BARU
      </h1>
      <div className="mx-5 px-4 flex flex-col mt-16 space-y-14 text-center md:text-left md:max-w-5xl md:mx-auto">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="my-auto md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        className="rounded-xl shadow-2xl hover:opacity-70"
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                      />
                    </Link>
                  </div>
                  <div className="my-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <h1 className="text-2xl font-bold mb-6 hover:text-teal-500">
                        {project.name}
                      </h1>
                    </Link>
                    <p className="text-l leading-7 mb-4 text-neutral-600 dark:text-neutral-200">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
