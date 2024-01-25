import ImageGallery from "@/src/app/components/ImageGallery";
import { RichText } from "@/src/app/components/RichText";
import { fullRental } from "@/src/app/interface";
import { client } from "@/src/app/lib/sanity";
import { formatCurrency } from "@/src/utils";
import { PortableText } from "@portabletext/react";
import { Bath, BedDouble, CarFront, MapPin, Scaling } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

async function getData(slug: string) {
  const query = `*[_type == "rental" && slug.current == "${slug}"][0] {
        _id,
          images,
          installment,
          name,
          "location": location->name,
          content,
          link,
          listing,
          bedroom,
          bathroom,
          parking,
          size,
          "slug": slug.current,
          facilities,
          "propertyType": propertyType->name,
          "dateIn": dateIn->name,
          deposit,
          "furnish": furnish->name,
      }`;

  const data = await client.fetch(query);

  return data;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default async function Rent({ params }: { params: { slug: string } }) {
  const data: fullRental = await getData(params.slug);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col justify-center gap-8 px-0 pt-16 mt-2 sm:px-4 lg:pt-24 lg:flex-row">
        <div className="max-w-full lg:w-1/2">
          <div className="mb-7">
            <ImageGallery images={data.images} />
          </div>
          <div className="max-w-screen-sm pb-5 mx-5 text-center border rounded-md shadow-md sm:mx-auto font-inter">
            <h4 className="px-4 py-3 text-sm sm:px-8 sm:text-base bg-neutral-200 rounded-t-md">
              {data.name} - {data.location}
            </h4>
            <hr className="pb-3"></hr>
            <div className="flex flex-row items-center justify-center gap-6 pt-2 text-center sm:my-auto sm:mx-auto">
              <div className="text-sm">
                <BedDouble className="w-8 h-8 mx-auto" />
                {data.bedroom} bilik tidur
              </div>
              <div className="text-sm">
                <Bath className="w-8 h-8 mx-auto" />
                {data.bathroom} bilik air
              </div>
              <div className="text-sm">
                <CarFront className="w-8 h-8 mx-auto" />
                {data.parking} parkir
              </div>
              <div className="text-sm">
                <Scaling className="w-8 h-8 mx-auto" />
                {data.size} sqft
              </div>
            </div>
            <div className="flex flex-col px-4 sm:px-8 pt-5 gap-2.5">
              <Link
                href={data.link}
                className="flex items-center justify-center gap-1 px-6 py-3 font-medium bg-teal-600 border-2 border-teal-600 rounded-md shadow-md text-neutral-100 hover:bg-teal-700"
              >
                <FaWhatsapp className="w-5 h-5" />
                Hubungi kami
              </Link>
              <Link
                href={data.listing}
                className="flex items-center justify-center px-6 py-3 font-medium border-2 border-teal-600 rounded-md shadow-md hover:bg-teal-700 hover:text-neutral-100"
              >
                Ketahui lebih lanjut
              </Link>
              {/* <button
              className="flex flex-row p-3 border-2 border-teal-600 rounded shadow-md hover:bg-teal-700 hover:text-neutral-100 gap-x-2"
              type="submit"
            >
              <span className="text-sm">Checkout now</span>
            </button> */}
            </div>
          </div>
        </div>
        <div className="px-4 lg:w-1/2 font-inter">
          <div className="mb-2 sm:mb-3">
            <span className="mb-0.5 inline-block uppercase">Sewa</span>
            <h2 className="text-2xl font-bold sm:text-3xl">{data.name}</h2>
          </div>
          <div className="flex items-center justify-start gap-2">
            <MapPin className="w-5 h-5" />
            {data.location}
          </div>
          <div className="mt-2">
            <div className="text-xl font-bold sm:text-2xl">
              {formatCurrency(data.installment)} /
              <span className="text-lg"> bulan</span>
              {/* <span className="mb-0.5 line-through">RM{data.price + 3000}</span> */}
            </div>
          </div>
          <div className="p-4 my-8 tracking-wide border rounded-md shadow-md font-inter sm:p-6">
            <h3 className="pb-4 text-lg font-semibold sm:text-xl sm:pb-6">
              Info Lanjut
            </h3>
            <hr className="h-1 pb-4 sm:pb-6"></hr>
            <div className="flex flex-row">
              <div className="w-1/2">
                <div className="mb-4 sm:mb-6">
                  <h4 className="">Jenis hartanah:</h4>
                  <p className="text-sm text-neutral-600">
                    {data.propertyType}
                  </p>
                </div>
                <div className="">
                  <h4 className="">Deposit:</h4>
                  <p className="text-sm text-neutral-600">{data.deposit}</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-4 sm:mb-6">
                  <h4 className="">Tarikh masuk:</h4>
                  <p className="text-sm text-neutral-600">{data.dateIn}</p>
                </div>
                <div className="">
                  <h4 className="">Perabot:</h4>
                  <p className="text-sm text-neutral-600">{data.furnish}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <PortableText value={data.content} components={RichText} />
          </div>
          <div className="justify-center pt-4 mt-8 tracking-wide font-inter sm:pt-6 md:justify-start">
            <h3 className="px-4 pb-4 text-lg font-semibold sm:text-xl sm:pb-6 sm:px-6">
              Kemudahan
            </h3>
            <hr className="h-1 pb-4 sm:pb-6"></hr>
            <div className="grid grid-cols-1 px-4 text-sm sm:px-6 sm:grid-cols-2 gap-x-2">
              <p className="mb-4 sm:mb-6">{data.facilities[0]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[1]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[2]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[3]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[4]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[5]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[6]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[7]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[8]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[9]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[10]}</p>
              <p className="mb-4 sm:mb-6">{data.facilities[11]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
