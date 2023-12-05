import { viewing } from "../interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == "video"] | order(_createdAt desc) {
    _id,
      name,
      "videourl": video.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default async function ViewingList() {
  const data: viewing = await getData();
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="pt-10 flex justify-between items-center">
        <div className="flex-col mx-auto text-center px-2">
          <h1 className="font-playfair mb-4 font-bold uppercase text-4xl md:text-5xl">
            Video 360
          </h1>
          {/* <a
            href="https://api.whatsapp.com/send?phone=60176515784"
            rel="noreferrer"
            target="_blank"
            className="font-inter text-base md:text-lg hover:font-medium"
          >
            Hubungi kami jika anda ingin sewakan hartanah anda &gt;
          </a> */}
        </div>
      </div>
      <div className="mt-12 md:mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((video) => (
          <div
            key={video._id}
            className="flex-shrink-0 group relative border rounded-md shadow-lg hover:shadow-xl"
          >
            <div className="w-auto h-96 overflow-hidden rounded-t-md">
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
            <div className="my-4 mx-4 flex flex-col text-center gap-y-1">
              <div className="font-inter">
                <h2 className="md:text-sm">{video.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
