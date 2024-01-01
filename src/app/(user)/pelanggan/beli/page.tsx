import { formatCurrency } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import { simplifiedProject } from "@/src/app/interface";
import { client } from "@/src/app/lib/sanity";

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
    <div className="max-w-2xl px-6 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-between pt-10">
        <div className="flex-col px-2 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold uppercase font-playfair md:text-5xl">
            Beli
          </h1>
          <a
            href="https://api.whatsapp.com/send?phone=60176515784"
            rel="noreferrer"
            target="_blank"
            className="text-base font-inter md:text-lg hover:font-medium"
          >
            Hubungi kami jika anda ingin menjual hartanah anda &gt;
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-12 md:mt-20 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((project) => (
          <div
            key={project._id}
            className="relative border rounded-md shadow-lg group hover:shadow-xl"
          >
            <Link href={`/pelanggan/beli/${project.slug}`}>
              <div className="w-full overflow-hidden aspect-square rounded-t-md lg:h-80">
                <Image
                  src={project.imageUrl}
                  alt=""
                  className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex flex-col mx-4 my-4 text-center font-inter gap-y-1">
                <div>
                  <h2 className="md:text-sm">{project.name}</h2>
                  <span className="absolute left-0 top-3 rounded-r-lg bg-teal-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    {project.categoryName}
                  </span>
                </div>
                <p className="font-medium md:text-sm">
                  {formatCurrency(project.price)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
