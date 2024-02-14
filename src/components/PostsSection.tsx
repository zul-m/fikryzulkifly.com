"use client";
import { compareDesc, format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const postContent = {
  heading: {
    title: "Membantu Anda Memilih Rumah Impian",
    subtitle: "Artikel Terkini",
    description:
      "Pelajari perkara-perkara yang perlu dipertimbangkan sebelum membuat keputusan pembelian, termasuk lokasi yang sesuai, jenis rumah yang paling sesuai dengan keperluan anda, serta strategi menerokai pasaran hartanah semasa.",
  },
  post: [
    {
      title: "Panduan Jual Rumah",
      date: "2023-12-05",
      image: "/artikel/1.png",
      category: "Panduan",
      url: "/artikel/panduan-jual-rumah",
    },
    {
      title: "Panduan Sewa Rumah",
      date: "2023-12-14",
      image: "/artikel/5.png",
      category: "Panduan",
      url: "/artikel/panduan-sewa-rumah",
    },
    {
      title: "Panduan Jual Rumah Guna Ejen Hartanah",
      date: "2023-12-15",
      image: "/artikel/real-estate.jpg",
      category: "Panduan",
      url: "/artikel/panduan-jual-rumah-guna-ejen",
    },
    {
      title: "Apa Itu RUMAWIP",
      date: "2024-02-14",
      image: "/artikel/rumawip.png",
      category: "Rumawip",
      url: "/artikel/apa-itu-rumawip",
    },
  ],
};

const PostsSection = () => {
  // Sort posts by date in decending order
  const sortedPosts = postContent.post
    .slice(0, 4) // Create a copy of the array to avoid mutating the original
    .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));

  return (
    <section id="articles" className="pt-14 pb-15 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="justify-center mb-24 lg:flex">
          <div className="items-center w-full gap-0 font-bold lg:w-8/12 lg:flex font-poppins">
            <div className="">
              {postContent.heading.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-sm mb-5 inline-block text-teal-600"
                >
                  {postContent.heading.subtitle}
                </motion.span>
              )}
              {postContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="mb-4 text-2xl lg:text-4xl lg:mb-0"
                >
                  {postContent.heading.title}
                </motion.h2>
              )}
            </div>
            {/* <div className="self-end lg:w-5/12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.15,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-gray-500"
              >
                {postContent.heading.description}
              </motion.p>
            </div> */}
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 mx-auto mb-20 md:grid-cols-2 xl:grid-cols-4 lg:w-10/12 font-poppins">
          {sortedPosts &&
            sortedPosts.map((post, index) => {
              index *= 0.05;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-md shadow-md cursor-pointer bg-neutral-100 group hover:shadow-lg"
                >
                  <Link
                    href={post.url}
                    className="relative block overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1064}
                      height={644}
                      className="object-cover object-center h-[200px] duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                    />
                  </Link>
                  <Link href={post.url}>
                    <div className="p-8">
                      <p className="text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]">
                        {format(parseISO(post.date), "d LLL, yyy")} •{" "}
                        {post.category}
                      </p>
                      <h3 className="mb-4 text-lg leading-none xl:text-base">
                        {post.title}
                      </h3>
                      <p className="hover:text-teal-700 text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-teal-700">
                        Lebih lanjut
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
