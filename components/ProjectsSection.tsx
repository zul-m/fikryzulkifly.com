import { simplifiedProject } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "project" && (category->name == "projek baru" || category->name == "subsale")][0..3] | order(_createdAt desc) {
    _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProjectsSection() {
  const data: simplifiedProject = await getData();

  return (
    <section id="projects">
      <div className="pt-32 mx-auto max-w-max">
        <div className="flex flex-col items-center">
          <h1 className="font-bold mx-auto text-4xl md:text-5xl">BELI</h1>
          <Link
            className="text-center items-center flex flex-col md:flex-row gap-x-1 gap-y-2 mx-5 pt-12 text-l md:text-xl"
            href="/beli"
          >
            Cari rumah idaman anda, terokai projek baru yang akan datang{" "}
            <span>
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
        <div className="mt-12 md:mt-20 pb-14 px-5 justify-between overflow-x-auto flex flex-row gap-x-6 gap-y-10 xl:gap-x-8">
          {data.map((project) => (
            <div
              key={project._id}
              className="flex-shrink-0 group relative border rounded-md shadow-lg hover:shadow-2xl"
            >
              <Link href={`/beli/${project.slug}`}>
                <div className="aspect-square w-72 h-72 overflow-hidden rounded-t-md">
                  <Image
                    src={project.imageUrl}
                    alt=""
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="my-4 mx-4 flex flex-col text-center gap-y-1">
                  <div>
                    <h2 className="md:text-sm">{project.name}</h2>
                    <span className="absolute left-0 top-3 rounded-r-lg bg-teal-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                      {project.categoryName}
                    </span>
                  </div>
                  <p className="md:text-sm font-medium">RM{project.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
