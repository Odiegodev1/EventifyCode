import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Seu App <onboarding@resend.dev>", // usa domínio padrão do Resend
      to: [to],
      subject,
      html: `<div>
              <h2>${subject}</h2>
              <p>${message}</p>
             </div>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
