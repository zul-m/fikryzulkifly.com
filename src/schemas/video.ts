export default {
  name: "video",
  type: "document",
  title: "Video",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nama Projek",
    },
    {
      name: "thumbnail",
      type: "image",
      title: "Gambar Depan",
    },
    {
      name: "video",
      type: "file",
      title: "Video",
    },
  ],
};
