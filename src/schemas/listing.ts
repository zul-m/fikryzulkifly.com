export default {
  name: "listing",
  title: "Listing Sewa",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nama",
      type: "string",
    },
    {
      name: "project",
      title: "Nama projek",
      type: "reference",
      to: [
        {
          type: "listingProject",
        },
      ],
    },
    {
      name: "hero",
      title: "Gambar depan",
      type: "image",
    },
    {
      name: "link",
      title: "Pautan ke 'listing' Telegram",
      type: "url",
    },
    {
      name: "installment",
      title: "Installment bulanan",
      type: "number",
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
  ],
};
