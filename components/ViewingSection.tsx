import { viewing } from "@/app/interface";
import { client } from "@/app/lib/sanity";
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
        <div className="flex flex-col justify-center sm:flex-row px-5">
          <Link className="font-inter text-l md:text-xl" href="/360">
            Lawat galeri pameran hartanah pada bila-bila masa dan di mana
            sahaja,{" "}
            <span className="text-teal-600 hover:text-teal-700">
              dari sudut yang baru &gt;
            </span>
          </Link>
        </div>
        <div className="mt-8 pb-14 px-5 justify-between overflow-x-auto flex flex-row gap-x-6 gap-y-10 xl:gap-x-8">
          {data.map((video) => (
            <div
              key={video._id}
              className="flex-shrink-0 group relative border rounded-md shadow-lg hover:shadow-xl"
            >
              <div className="w-72 h-96 overflow-hidden rounded-t-md">
                <video
                  className="w-full h-full object-cover object-center"
                  autoPlay
                  muted
                  width={300}
                  height={300}
                  controls
                  src={video.videourl}
                ></video>
              </div>
              <div className="font-inter my-4 mx-4 flex flex-col text-center gap-y-1">
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
