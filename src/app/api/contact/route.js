import connectDB from "@/src/app/lib/mongodb";
import Contact from "@/src/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Mesej berjaya dihantar."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({
        msg: [
          "Mesej gagal dihantar. Sila hubungi atau Whatsapp saya di +60176515784.",
        ],
      });
    }
  }
}
