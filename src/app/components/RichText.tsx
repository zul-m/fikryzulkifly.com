import { default as image, default as Image } from "next/image";
import Link from "next/link";
import { urlFor } from "@/src/app/lib/sanity";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full m-10 mx-auto h-96">
          <Image
            className="object-contain"
            src={urlFor(image).url()}
            alt=""
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="py-5 ml-10 space-y-5 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal mt-lg">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-10 text-4xl font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-10 text-3xl font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-10 text-2xl font-bold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="py-10 text-xl font-bold">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="py-10 font-bold text-l">{children}</h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="py-5 pl-5 my-5 border-l-4 border-l-teal-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopenner"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-teal-400 hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
