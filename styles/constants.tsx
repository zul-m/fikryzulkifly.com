import { SideNavItem } from "./types";
import { Icon } from "@iconify/react";

/* HeaderMobile and SideNav sections */
export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Pemilik",
    path: "/pemilik",
    submenu: true,
    subMenuItems: [{ title: "Jual Rumah", path: "/pemilik/jual-rumah" }],
  },
  {
    title: "Pelanggan",
    path: "/pelanggan",
    submenu: true,
    subMenuItems: [
      { title: "Beli", path: "/pelanggan/beli" },
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

/* HelpSection */
/* export const FEATURES = [
  {
    title: "Semak Harga",
    icon: (
      <Icon
        icon="ic:outline-check-circle"
        color="#e5e5e5"
        width="30"
        height="30"
      />
    ),
    description:
      "Kami menyediakan khidmat semakan harga untuk memastikan penyenaraian anda sesuai dengan pasaran semasa.",
  },
  {
    title: "Khidmat Nasihat",
    icon: (
      <Icon
        icon="ic:outline-question-answer"
        color="#e5e5e5"
        width="30"
        height="30"
      />
    ),
    description:
      "Kami akan membimbing anda dari awal hingga akhir proses jualan dengan menjawab segala pertanyaan dan menyediakan panduan peribadi.",
  },
  {
    title: "Pengiklanan",
    icon: (
      <Icon icon="ic:outline-public" color="#e5e5e5" width="30" height="30" />
    ),
    description:
      "Kami memastikan rumah anda mendapat perhatian yang mencukupi melalui pengiklanan dalam talian dan media sosial.",
  },
  {
    title: "Proses Jualan",
    icon: (
      <Icon icon="ic:outline-sell" color="#e5e5e5" width="30" height="30" />
    ),
    description:
      "Kami akan bimbing anda dalam rundingan harga, dan bekerjasama dengan pihak-pihak berkaitan bagi melancarkan proses.",
  },
]; */
