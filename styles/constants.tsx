import { SideNavItem } from "./types";
import { Icon } from "@iconify/react";

/* HeaderMobile and SideNav sections */
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
      { title: "Sewa Rumah", path: "/panduan/sewa-rumah" },
      { title: "Jual Rumah", path: "/panduan/jual-rumah" },
      { title: "Jual Rumah Guna Ejen", path: "/panduan/jual-rumah-guna-ejen" },
    ],
  },
];

/* HelpSection */
export const FEATURES = [
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
];
