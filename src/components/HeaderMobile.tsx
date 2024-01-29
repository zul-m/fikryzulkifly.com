"use client";
import { SIDENAV_ITEMS } from "@/src/styles/constants";
import { MenuItemWithSubMenuProps } from "@/src/styles/types";
import { Icon } from "@iconify/react";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useRef, useState } from "react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const HeaderMobile = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
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
      <div className="flex items-center py-2 pl-4 md:hidden">
        <Link href="/">
          <Image src="/logo-700.svg" alt="" width={191} height={39} />
        </Link>
      </div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className={`fixed inset-0 z-50 w-full md:hidden ${
          isOpen ? "" : "pointer-events-none"
        }`}
        ref={containerRef}
      >
        <motion.div
          className="absolute inset-0 right-0 w-full bg-teal-50"
          variants={sidebar}
        />
        <motion.ul
          variants={variants}
          className="absolute grid w-full gap-3 px-10 py-16"
        >
          {SIDENAV_ITEMS.map((item, idx) => {
            const isLastItem = idx === SIDENAV_ITEMS.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                {item.submenu ? (
                  <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                ) : (
                  <MenuItem>
                    <Link
                      href={item.path}
                      onClick={() => toggleOpen()}
                      className={`flex w-full text-xl font-poppins tracking-wide ${
                        item.path === pathname
                          ? "text-teal-600 font-medium"
                          : "font-medium"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </MenuItem>
                )}
                {!isLastItem && (
                  <MenuItem className="w-full h-px my-3 bg-gray-300" />
                )}
              </div>
            );
          })}
        </motion.ul>
        <MenuToggle toggle={toggleOpen} />
      </motion.nav>
    </header>
  );
};

export default HeaderMobile;

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-5 top-[18px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-xl tracking-wide font-inter"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex flex-row items-center justify-between w-full font-medium">
            <span className={`${pathname.includes(item.path) ? "" : ""}`}>
              {item.title}
            </span>
            <div className={`${subMenuOpen && "rotate-180"}`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="flex flex-col mt-4 ml-4 space-y-4 font-medium tracking-wide font-inter">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.path}
                    onClick={() => toggleOpen()}
                    className={` ${
                      subItem.path === pathname
                        ? "text-teal-600"
                        : "text-neutral-600"
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
