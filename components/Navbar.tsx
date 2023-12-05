"use client"; // this is a client component
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const links = [
  { name: "Beli", href: "/beli" },
  { name: "Sewa", href: "/sewa" },
  { name: "360", href: "/360" },
  { name: "Semak Kelayakan", href: "/semak-kelayakan" },
  { name: "Panduan Jual", href: "/panduan-jual-rumah" },
];

export default function Navbar() {
  /* const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme; */
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50">
      <div className="text-center md:space-x-10 md:items-center justify-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <div className="container flex items-center space-x-2">
              <h2 className="font-inter text-2xl font-bold">
                Fikry<span className="text-teal-600">Zulkifly</span>
              </h2>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-8 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <nav className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0">
              {links.map((link, idx) => (
                <div key={idx}>
                  {pathname === link.href ? (
                    <Link
                      className="font-inter text-lg font-semibold text-teal-600 hover:text-teal-700"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-inter text-lg font-semibold transition duration-100 hover:text-teal-600"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )} */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
