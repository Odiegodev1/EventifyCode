"use server";

import { auth } from "@/lib/auth";
import { ParticipantsSchema } from "../_schema/participantsSchema";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { Resend } from "resend";

// Cria a instância do Resend usando a API key do .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function addTicketAction(formData: ParticipantsSchema) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!session || !userId) {
    return { data: null, error: "Usuário não logado" };
  }

  const generateManualCode = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const qrCodeData = uuidv4();
  const manualCode = generateManualCode();

  try {
    // Cria ingresso no banco
    const createTicket = await prisma.ticket.create({
      data: {
        participantName: formData.participantName,
        participantEmail: formData.participantEmail,
        eventId: formData.eventId,
        qrCodeData,
        manualCode,
      },
    });

    try {
      // Envia email
      await resend.emails.send({
        from: "Seu App <onboarding@resend.dev>", // usar domínio verificado
        to: [formData.participantEmail],
        subject: `Seu ingresso para o evento`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 16px;">
            <h2>Olá ${formData.participantName},</h2>
            <p>Seu ingresso foi criado com sucesso!</p>
            <p><strong>Código manual:</strong> ${manualCode}</p>
            <p>Use esse código para acessar o evento.</p>
            <hr />
            <small>Enviado com Next.js + Resend 🚀</small>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error("Erro ao enviar email:", emailErr);
      // Não quebra a action, apenas loga
    }

    return { data: createTicket, error: null };
  } catch (err) {
    console.error("Erro ao criar ingresso:", err);
    return { data: null, error: "Erro ao adicionar ingresso" };
  }
}
