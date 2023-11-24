import Image from "next/image";
import Link from "next/link";
import { simplifiedProject } from "../interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == "project" && (category->name == "projek baru" || category->name == "subsale")] | order(_createdAt desc) {
    _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name
  }`;

  const data = await client.fetch(query);

  return data;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default async function BuyList({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProject[] = await getData();
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="pt-10 flex justify-between items-center">
        <h1 className="font-bold tracking-tight uppercase mx-auto text-4xl md:text-5xl">
          Beli
        </h1>
      </div>
      <div className="mt-12 md:mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((project) => (
          <div
            key={project._id}
            className="group relative border rounded-md shadow-lg hover:shadow-2xl"
          >
            <Link href={`/beli/${project.slug}`}>
              <div className="aspect-square w-full overflow-hidden rounded-t-md lg:h-80">
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
  );
}
