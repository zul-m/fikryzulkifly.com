import { simplifiedRental } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { formatCurrency } from "@/utils";
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
        <div className="flex flex-col space-y-1 sm:flex-row justify-between px-5">
          <h3 className="font-playfair font-bold text-3xl md:text-4xl">
            Mencari Rumah Sewa.
          </h3>
          <Link
            className="font-inter flex items-center font-medium gap-x-1 text-l md:text-xl text-teal-600 hover:text-teal-700"
            href="/sewa"
          >
            Lihat semua &gt;
          </Link>
        </div>
        <div className="mt-8 pb-14 px-5 justify-between overflow-x-auto flex flex-row gap-x-6 gap-y-10 xl:gap-x-8">
          {data.map((rental) => (
            <div
              key={rental._id}
              className="flex-shrink-0 group relative border rounded-md shadow-lg hover:shadow-xl"
            >
              <Link href={`/sewa/${rental.slug}`}>
                <div className="aspect-square w-72 h-72 overflow-hidden rounded-t-md">
                  <Image
                    src={rental.imageUrl}
                    alt=""
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="font-inter my-4 mx-4 flex flex-col text-center gap-y-1">
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
    </section>
  );
}
