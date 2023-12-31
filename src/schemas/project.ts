export default {
  name: "project",
  type: "document",
  title: "Projek",
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
      name: "price",
      type: "number",
      title: "Harga",
    },
    {
      name: "installment",
      type: "number",
      title: "Anggaran bayaran bulanan",
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
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
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
  ],
};
