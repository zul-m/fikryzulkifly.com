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
  ],
};
