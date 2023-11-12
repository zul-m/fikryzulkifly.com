import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Isi nama dengan betul."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Isi alamat email dengan betul."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  message: {
    type: String,
    required: [true, "Isi mesej dengan betul."],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
