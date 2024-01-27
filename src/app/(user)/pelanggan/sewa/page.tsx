"use client";
import { compareDesc, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const pageContent = {
  heading: {
    title: "Pelbagai Pilihan Tersedia",
    subtitle: "Sewa",
  },
  projects: [
    {
      title: "Lakefront Homes",
      location: "Cyberjaya, Selangor",
      url: "/pelanggan/sewa/lakefront-homes",
      img: "/sewa/lakefront-homes/01.png",
      date: "2024-01-26",
    },
    /* {
      title: "Lakefront Residence",
      location: "Cyberjaya, Selangor",
      url: "/pelanggan/sewa/lakefront-residence",
      img: "/sewa/lakefront-residence/Cover.PNG",
      date: "2024-01-27",
    }, */
  ],
};

const page = () => {
  // Sort projects by date in decending order
  const sortedProjects = pageContent.projects
    .slice() // Create a copy of the array to avoid mutating the original
    .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));

  return (
    <>
      <section id="hero" className="pt-32 pb-24 lg:pt-52">
        <div className="container px-5 mx-auto">
          <div className="items-center justify-between w-full mx-auto lg:flex lg:w-10/12">
            <div className="mx-auto font-bold text-center font-poppins lg:max-w-3xl">
              {pageContent.heading.subtitle && (
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
                  className="text-teal-600 uppercase tracking-[3px] text-[12.5px] mb-5 inline-block"
                >
                  {pageContent.heading.subtitle}
                </motion.span>
              )}
              {pageContent.heading.title && (
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
                  {pageContent.heading.title}
                </motion.h1>
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="pt-0 pb-52">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap mx-auto mb-10 lg:w-10/12 font-poppins">
            {sortedProjects &&
              sortedProjects.map((project, index) => {
                index *= 0.05;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index,
                        duration: 0.3,
                      },
                    }}
                    viewport={{ once: true }}
                    className="relative w-full p-2 overflow-hidden lg:w-6/12 group"
                  >
                    <Link
                      href={project.url}
                      className="relative block overflow-hidden rounded-t-md"
                    >
                      <Image
                        src={project.img}
                        alt="fikryzulkifly.com"
                        width={1064}
                        height={644}
                        className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                      />
                    </Link>
                    <div className="px-2 py-6 text-center shadow-md font-poppins rounded-b-md">
                      <span className="block mb-1 text-gray-500">
                        {project.location}
                      </span>
                      <h3 className="mb-2">
                        <Link
                          href={project.url}
                          className="text-2xl leading-none"
                        >
                          {project.title}
                        </Link>
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
