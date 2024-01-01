import { simplifiedRental } from "@/src/app/interface";
import { client } from "@/src/app/lib/sanity";
import { formatCurrency } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "rental"][0..3] | order(_createdAt desc) {
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

export default async function RentalSection() {
  const data: simplifiedRental = await getData();

  return (
    <section id="rental" className="bg-neutral-100">
      <div className="pt-10 mx-auto max-w-max">
        <div className="flex flex-col justify-between px-5 space-y-1 sm:flex-row">
          <h3 className="text-3xl font-bold font-playfair md:text-4xl">
            Mencari Rumah Sewa.
          </h3>
          <Link
            className="flex items-center font-medium text-teal-600 font-inter gap-x-1 text-l md:text-xl hover:text-teal-700"
            href="/pelanggan/sewa"
          >
            Lihat semua &gt;
          </Link>
        </div>
        <div className="flex flex-row justify-between px-5 mt-8 overflow-x-auto pb-14 gap-x-6 gap-y-10 xl:gap-x-8">
          {data.map((rental) => (
            <div
              key={rental._id}
              className="relative flex-shrink-0 border rounded-md shadow-lg group hover:shadow-xl"
            >
              <Link href={`/pelanggan/sewa/${rental.slug}`}>
                <div className="overflow-hidden aspect-square w-72 h-72 rounded-t-md">
                  <Image
                    src={rental.imageUrl}
                    alt=""
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col mx-4 my-4 text-center font-inter gap-y-1">
                  <div>
                    <h2 className="md:text-sm">{rental.name}</h2>
                    <span className="absolute left-0 top-3 rounded-r-lg bg-teal-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                      {rental.location}
                    </span>
                  </div>
                  <p className="font-medium md:text-sm">
                    {formatCurrency(rental.installment)}/bulan
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
