import { viewing } from "@/src/app/interface";
import { client } from "@/src/app/lib/sanity";

async function getData() {
  const query = `*[_type == "video"] | order(_createdAt desc) {
    _id,
      name,
      "imageurl": thumbnail.asset->url,
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
    <div className="max-w-2xl px-6 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-between pt-10">
        <div className="flex-col px-2 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold uppercase font-playfair md:text-5xl">
            Video 360
          </h1>
          {/* <a
            href="https://api.whatsapp.com/send?phone=60176515784"
            rel="noreferrer"
            target="_blank"
            className="text-base font-inter md:text-lg hover:font-medium"
          >
            Hubungi kami jika anda ingin sewakan hartanah anda &gt;
          </a> */}
        </div>
      </div>
      <div className="grid grid-cols-1 mt-12 md:mt-20 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((video) => (
          <div
            key={video._id}
            className="relative flex-shrink-0 border rounded-md shadow-lg group hover:shadow-xl"
          >
            <div className="w-auto overflow-hidden h-96 rounded-t-md">
              <video
                className="object-cover object-center w-full h-full"
                poster={video.imageurl}
                muted
                width={300}
                height={300}
                controls
                src={video.videourl}
              ></video>
            </div>
            <div className="flex flex-col mx-4 my-4 text-center gap-y-1">
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
