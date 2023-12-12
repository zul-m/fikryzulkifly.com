import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Beli",
    path: "/beli",
  },
  {
    title: "Sewa",
    path: "/sewa",
  },
  {
    title: "360",
    path: "/360",
  },
  {
    title: "Semak Kelayakan",
    path: "/semak-kelayakan",
  },
  {
    title: "Panduan",
    path: "/panduan",
    submenu: true,
    subMenuItems: [
      { title: "Jual Rumah", path: "/panduan/jual-rumah" },
      { title: "Sewa Rumah", path: "/panduan/sewa-rumah" },
    ],
  },
];
