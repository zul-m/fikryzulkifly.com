import { JualRumahEmail } from "@/app/(admin)/emails/jual-rumah";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email, phoneNo, address, message } = await request.json();

  await resend.emails.send({
    from: "Fikry Zulkifly <admin@fikryzulkifly.com>",
    to: email,
    bcc: "fikryzulkiflyproperty@gmail.com",
    subject: "Perkidmatan Jual Rumah | Fikry Zulkifly",
    react: JualRumahEmail({ firstName, email, phoneNo, address, message }),
  });

  return NextResponse.json({
    status: "OK",
  });
}
