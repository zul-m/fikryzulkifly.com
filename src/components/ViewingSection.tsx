import { viewing } from "@/src/app/interface";
import { client } from "@/src/app/lib/sanity";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "video"][0..3] | order(_createdAt desc) {
    _id,
      name,
      "videourl": video.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ViewingSection() {
  const data: viewing = await getData();
  return (
    <section id="viewing">
      <div className="pt-10 mx-auto max-w-max">
        <div className="flex flex-col justify-center px-5 sm:flex-row">
          <Link className="font-inter text-l md:text-xl" href="/360">
            Lawat galeri pameran hartanah pada bila-bila masa dan di mana
            sahaja,{" "}
            <span className="text-teal-600 hover:text-teal-700">
              dari sudut yang baru &gt;
            </span>
          </Link>
        </div>
        <div className="flex flex-row justify-between px-5 mt-8 overflow-x-auto pb-14 gap-x-6 gap-y-10 xl:gap-x-8">
          {data.map((video) => (
            <div
              key={video._id}
              className="relative flex-shrink-0 border rounded-md shadow-lg group hover:shadow-xl"
            >
              <div className="overflow-hidden w-72 h-96 rounded-t-md">
                <video
                  className="object-cover object-center w-full h-full"
                  muted
                  width={300}
                  height={300}
                  controls
                  src={video.videourl}
                ></video>
              </div>
              <div className="flex flex-col mx-4 my-4 text-center font-inter gap-y-1">
                <div>
                  <h2 className="md:text-sm">{video.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
