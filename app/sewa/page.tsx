import { formatCurrency } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { simplifiedRental } from "../interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == "rental"] | order(_createdAt desc) {
    _id,
      installment,
      name,
      "location": location->name,
      "slug": slug.current,
      "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default async function RentList({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedRental[] = await getData();
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="pt-10 flex justify-between items-center">
        <div className="flex-col mx-auto text-center px-2">
          <h1 className="mb-4 font-bold tracking-tight uppercase text-4xl md:text-5xl">
            Sewa
          </h1>
          <a
            href="https://api.whatsapp.com/send?phone=60176515784"
            rel="noreferrer"
            target="_blank"
            className="text-base md:text-lg hover:font-medium"
          >
            Hubungi kami jika anda ingin sewakan hartanah anda &gt;
          </a>
        </div>
      </div>
      <div className="mt-12 md:mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((rental) => (
          <div
            key={rental._id}
            className="group relative border rounded-md shadow-lg hover:shadow-xl"
          >
            <Link href={`/sewa/${rental.slug}`}>
              <div className="aspect-square w-full overflow-hidden rounded-t-md lg:h-80">
                <Image
                  src={rental.imageUrl}
                  alt=""
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="my-4 mx-4 flex flex-col text-center gap-y-1">
                <div>
                  <h2 className="md:text-sm">{rental.name}</h2>
                  <span className="absolute left-0 top-3 rounded-r-lg bg-teal-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    {rental.location}
                  </span>
                </div>
                <p className="md:text-sm font-medium">
                  {formatCurrency(rental.installment)}/bulan
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
