import { SideNavItem } from "./types";

/* HeaderMobile and SideNav sections */
export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Pemilik",
    path: "/pemilik",
    submenu: true,
    subMenuItems: [
      { title: "Jual Rumah", path: "/pemilik/jual-rumah" },
      { title: "Sewa Rumah", path: "/pemilik/sewa-rumah" },
    ],
  },
  {
    title: "Pelanggan",
    path: "/pelanggan",
    submenu: true,
    subMenuItems: [
      { title: "Projek Baru", path: "/pelanggan/projek-baru" },
      { title: "Sewa", path: "/pelanggan/sewa" },
      { title: "Semak Kelayakan", path: "/pelanggan/semak-kelayakan" },
    ],
  },
  {
    title: "360",
    path: "/360",
  },
  {
    title: "Artikel",
    path: "/artikel",
    submenu: true,
    subMenuItems: [
      { title: "Panduan Sewa Rumah", path: "/artikel/panduan-sewa-rumah" },
      { title: "Panduan Jual Rumah", path: "/artikel/panduan-jual-rumah" },
      {
        title: "Panduan Jual Rumah Guna Ejen",
        path: "/artikel/panduan-jual-rumah-guna-ejen",
      },
    ],
  },
];
