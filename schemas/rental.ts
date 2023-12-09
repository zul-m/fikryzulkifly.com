export default {
  name: "rental",
  type: "document",
  title: "Sewa",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nama",
    },
    {
      name: "location",
      title: "Lokasi",
      type: "reference",
      to: [
        {
          type: "location",
        },
      ],
    },
    {
      name: "images",
      type: "array",
      title: "Gambar",
      of: [{ type: "image" }],
    },
    {
      name: "content",
      title: "Tentang",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Teks alternatif",
            },
          ],
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "installment",
      type: "number",
      title: "Bayaran bulanan",
    },
    {
      name: "propertyType",
      title: "Jenis hartanah",
      type: "reference",
      to: [
        {
          type: "propertyType",
        },
      ],
    },
    {
      name: "dateIn",
      title: "Tarikh masuk",
      type: "reference",
      to: [
        {
          type: "dateIn",
        },
      ],
    },
    {
      name: "deposit",
      type: "string",
      title: "Deposit",
    },
    {
      name: "furnish",
      title: "Perabot",
      type: "reference",
      to: [
        {
          type: "furnish",
        },
      ],
    },
    {
      name: "bedroom",
      type: "number",
      title: "Jumlah bilik tidur",
    },
    {
      name: "bathroom",
      type: "number",
      title: "Jumlah bilik air",
    },
    {
      name: "parking",
      type: "number",
      title: "Jumlah parkir",
    },
    {
      name: "size",
      type: "number",
      title: "Keluasan (sqft)",
    },
    {
      name: "link",
      type: "url",
      title: "Pautan ke Whatsapp",
    },
    {
      name: "listing",
      type: "url",
      title: "Pautan ke 'listing'",
    },
    {
      name: "facilities",
      type: "array",
      title: "Kemudahan",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "-", value: "-" },
          { title: "Bank", value: "✔️ Bank" },
          { title: "Dewan majlis", value: "✔️ Dewan majlis" },
          { title: "Dewan serbaguna", value: "✔️ Dewan serbaguna" },
          { title: "Gelanggang badminton", value: "✔️ Gelanggang badminton" },
          {
            title: "Gelanggang bola keranjang",
            value: "✔️ Gelanggang bola keranjang",
          },
          { title: "Gelanggang skuasy", value: "✔️ Gelanggang skuasy" },
          { title: "Gelanggang tenis", value: "✔️ Gelanggang tenis" },
          { title: "Gimnasium", value: "✔️ Gimnasium" },
          { title: "Kawasan barbeku", value: "✔️ Kawasan barbeku" },
          { title: "Kawasan persendirian", value: "✔️ Kawasan persendirian" },
          { title: "Kedai makan", value: "✔️ Kedai makan" },
          { title: "Kedai mamak", value: "✔️ Kedai mamak" },
          { title: "Kedai runcit", value: "✔️ Kedai runcit" },
          { title: "Kedai serbaneka", value: "✔️ Kedai serbaneka" },
          { title: "Keselamatan 24 jam", value: "✔️ Keselamatan 24 jam" },
          { title: "Kolam renang", value: "✔️ Kolam renang" },
          { title: "Meja berkelah", value: "✔️ Meja berkelah" },
          { title: "Mini Mart", value: "✔️ Mini Mart" },
          { title: "Parkir terbuka", value: "✔️ Parkir terbuka" },
          { title: "Parkir tertutup", value: "✔️ Parkir tertutup" },
          { title: "Pusat beli-belah", value: "✔️ Pusat beli-belah" },
          { title: "Sky Lounge", value: "✔️ Sky Lounge" },
          { title: "Surau", value: "✔️ Surau" },
          { title: "Taman permainan", value: "✔️ Taman permainan" },
          { title: "Trek joging", value: "✔️ Trek joging" },
          { title: "7 Eleven", value: "✔️ 7 Eleven" },
        ],
      },
    },
  ],
};
