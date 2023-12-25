"use client";
import { SIDENAV_ITEMS } from "@/styles/constants";
import { SideNavItem } from "@/styles/types";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SideNav = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <header
      className={`${
        header ? "shadow-md" : ""
      } w-full bg-white fixed top-0 z-50 transition-all`}
    >
      <div className="font-inter tracking-wide w-full justify-around top-0 py-3 items-center hidden md:flex">
        <Link href="/">
          <Image src="/logo-2.svg" alt="" width={200} height={41} />
        </Link>
        <div className="flex flex-row space-x-10">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
        <div className="lg:flex hidden items-center space-x-5">
          <p className="text-neutral-600 tracking-wider">+60 17-651 5784</p>
          <Link
            href="https://api.whatsapp.com/send?phone=60176515784"
            className="items-center font-semibold text-white bg-gradient-to-r from-sky-700 to-teal-700 hover:from-stone-900 hover:to-stone-900 px-6 py-3 rounded-full"
          >
            Hubungi kami
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center space-x-0.5 justify-between hover:text-teal-700 ${
              pathname.includes(item.path) ? "text-teal-700 font-medium" : ""
            }`}
          >
            <div className="items-center tracking-wide">{item.title}</div>
            <div className={`${subMenuOpen ? "rotate-180" : ""} flex mt-auto`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>
          <div></div>
          {subMenuOpen && (
            <div className="absolute bg-white shadow rounded-lg p-5 mt-3 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname
                        ? "text-teal-700 font-medium"
                        : "hover:text-teal-700 text-neutral-600 tracking-wide"
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`items-center hover:text-teal-700 ${
            item.path === pathname ? "text-teal-700 font-medium" : ""
          }`}
        >
          {item.title}
        </Link>
      )}
    </div>
  );
};
