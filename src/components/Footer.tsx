import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiTelegramLine,
  RiTiktokLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="max-w-3xl px-4 mx-auto mb-20 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0"></hr>
      <div className="flex flex-col p-4 mx-auto mt-5 text-center text-neutral-900 md:flex-row md:justify-between">
        {/* <div className="my-auto text-neutral-500 dark:text-neutral-100"> */}
        <div className="my-auto font-inter text-neutral-500">
          © 2024 Fikry Zulkifly
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <a
            href="https://www.facebook.com/FikryZulkiflyProperty"
            rel="noreferrer"
            target="_blank"
          >
            <RiFacebookBoxLine
              /* className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100" */
              className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://instagram.com/fikryzulkiflyproperty"
            rel="noreferrer"
            target="_blank"
          >
            <RiInstagramLine
              /* className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100" */
              className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://t.me/fzpropertylisting"
            rel="noreferrer"
            target="_blank"
          >
            <RiTelegramLine
              /* className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100" */
              className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://www.tiktok.com/@fikryzulkiflyproperty"
            rel="noreferrer"
            target="_blank"
          >
            <RiTiktokLine
              /* className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100" */
              className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500"
              size={30}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=60176515784"
            rel="noreferrer"
            target="_blank"
          >
            <RiWhatsappLine
              /* className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500 dark:text-neutral-100" */
              className="transition-transform cursor-pointer hover:-translate-y-1 text-neutral-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
