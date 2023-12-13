"use client";
import { SIDENAV_ITEMS } from "@/styles/constants";
import { SideNavItem } from "@/styles/types";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideNav = () => {
  return (
    <div className="w-full bg-white shadow fixed top-0 z-50 hidden md:flex items-center">
      <div className="py-5 mx-auto flex flex-row space-x-10">
        <Link href="/">
          <div className="container flex items-center">
            <h2 className="font-inter text-2xl font-bold">
              Fikry<span className="text-teal-600">Zulkifly</span>
            </h2>
          </div>
        </Link>
        {SIDENAV_ITEMS.map((item, idx) => {
          return <MenuItem key={idx} item={item} />;
        })}
      </div>
    </div>
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
              pathname.includes(item.path) ? "text-teal-600" : ""
            }`}
          >
            <div className="font-semibold text-xl items-center">
              {item.title}
            </div>
            <div className={`${subMenuOpen ? "rotate-180" : ""} flex mt-auto`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>
          {subMenuOpen && (
            <div className="mt-4 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname
                        ? "text-teal-600"
                        : "hover:text-teal-700 text-neutral-600 font-medium"
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
          className={`font-semibold text-xl items-center hover:text-teal-700 ${
            item.path === pathname ? "text-teal-600" : ""
          }`}
        >
          {item.title}
        </Link>
      )}
    </div>
  );
};
