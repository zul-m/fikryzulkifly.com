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
      title: "Pautan ke 'listing' di Telegram",
    },
  ],
};
