import { default as image, default as Image } from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/sanity";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
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
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-xl py-10 font-bold">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-l py-10 font-bold">{children}</h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-teal-600 border-l-4 pl-5 py-5 my-5">
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
