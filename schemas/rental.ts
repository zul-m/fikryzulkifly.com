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
