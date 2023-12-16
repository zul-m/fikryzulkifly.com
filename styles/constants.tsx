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
    title: "Semak harga",
    icon: (
      <Icon
        icon="ic:outline-check-circle"
        color="#e5e5e5"
        width="30"
        height="30"
      />
    ),
    description:
      "Sebelum menjual rumah, pastikan harga yang ditetapkan berpatutan. Kami menyediakan khidmat semakan harga untuk memastikan penyenaraian anda sesuai dengan pasaran semasa.",
  },
  {
    title: "Khidmat nasihat",
    icon: (
      <Icon
        icon="ic:outline-question-answer"
        color="#e5e5e5"
        width="30"
        height="30"
      />
    ),
    description:
      "Dalam dunia hartanah yang kompleks, kami akan membimbing anda dari awal hingga akhir proses jualan dengan menjawab segala pertanyaan dan menyediakan panduan peribadi.",
  },
  {
    title: "Pengiklanan",
    icon: (
      <Icon icon="ic:outline-public" color="#e5e5e5" width="30" height="30" />
    ),
    description:
      "Dengan strategi pemasaran yang cekap, kami memastikan rumah anda mendapat perhatian yang mencukupi melalui pengiklanan dalam talian dan media sosial.",
  },
  {
    title: "Proses jualan",
    icon: (
      <Icon icon="ic:outline-sell" color="#e5e5e5" width="30" height="30" />
    ),
    description:
      "Proses jualan rumah melibatkan banyak dokumen dan rundingan. Kami akan bimbing anda dalam rundingan harga, dan bekerjasama dengan pihak-pihak berkaitan bagi melancarkan proses.",
  },
];
