import React from "react";
import { RiTwitterXLine, RiTiktokLine } from "react-icons/ri";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto mb-20 max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-14 bg-neutral-200 border-0"></hr>
      <div className="mx-auto mt-5 p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="my-auto text-neutral-500 dark:text-neutral-100">
          © 2023 Fikry Zulkifly
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <a href="https://github.com/zul-m" rel="noreferrer" target="_blank">
            <AiOutlineFacebook
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a href="https://twitter.com/" rel="noreferrer" target="_blank">
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={28}
            />
          </a>
          <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
            <RiTiktokLine
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
            <RiTwitterXLine
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={28}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
