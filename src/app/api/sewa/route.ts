import { SewaRumahEmail } from "@/src/emails/sewa-rumah";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY_2);

export async function POST(request: Request) {
  const { firstName, email, phoneNo, address, message } = await request.json();

  await resend.emails.send({
    from: "Fikry Zulkifly <admin@fikryzulkifly.com>",
    to: email,
    bcc: "fikryzulkiflyproperty@gmail.com",
    subject: "Perkidmatan Sewa Rumah | Fikry Zulkifly",
    react: SewaRumahEmail({ firstName, email, phoneNo, address, message }),
  });

  return NextResponse.json({
    status: "OK",
  });
}
