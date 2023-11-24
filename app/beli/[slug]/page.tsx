import ImageGallery from "@/app/components/ImageGallery";
import { RichText } from "@/app/components/RichText";
import { fullProject } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Calculator } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

async function getData(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          installment,
          name,
          content,
          link,
          listing,
          "slug": slug.current,
          "categoryName": category->name,
      }`;

  const data = await client.fetch(query);

  return data;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default async function Buy({ params }: { params: { slug: string } }) {
  const data: fullProject = await getData(params.slug);
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="">
          <ImageGallery images={data.images} />
        </div>
        <div className="md:py-28">
          <div className="md:text-start text-center mb-2 md:mb-3">
            <span className="mb-0.5 inline-block uppercase">
              {data.categoryName}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">{data.name}</h2>
          </div>
          {/* <div className="mb-6 flex items-center gap-3 md:mb-10">
            <button
              className="flex flex-row bg-teal-600 hover:bg-teal-700 rounded-full shadow-md gap-x-2 p-3 text-white"
              type="submit"
            >
              <span className="text-sm">4.2</span>
              <Star className="h-5 w-5" />
            </button>
            <span className="text-sm transition duration-100">56 Ratings</span>
          </div> */}
          <div className="md:text-start text-center mb-4">
            <span className="text-sm">Harga bermula dari</span>
            <div className="text-xl font-bold md:text-2xl">
              RM{data.price}
              {/* <span className="mb-0.5 line-through">RM{data.price + 3000}</span> */}
            </div>
          </div>
          <div className="mb-6 flex items-center justify-center md:justify-start gap-2">
            <Calculator className="w-5 h-5" />
            <span className="text-sm">
              Anggaran bayaran RM{data.installment}/bulan
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2.5">
            <Link
              href={data.link}
              className="flex items-center justify-center gap-1 border-2 border-teal-600 text-neutral-100 font-medium px-6 py-3 bg-teal-600 rounded-md shadow-md hover:bg-teal-700"
            >
              <FaWhatsapp className="w-5 h-5" />
              Hubungi saya
            </Link>
            <Link
              href={data.listing}
              className="flex items-center justify-center border-2 border-teal-600 font-medium px-6 py-3 rounded-md shadow-md hover:bg-teal-700 hover:text-neutral-100"
            >
              Ketahui lebih lanjut
            </Link>
            {/* <button
              className="flex flex-row border-2 border-teal-600 hover:bg-teal-700 hover:text-neutral-100 rounded shadow-md gap-x-2 p-3"
              type="submit"
            >
              <span className="text-sm">Checkout now</span>
            </button> */}
          </div>
          <div className="py-10">
            <PortableText value={data.content} components={RichText} />
          </div>
        </div>
      </div>
    </div>
  );
}
