"use server";

import { auth } from "@/lib/auth";
import { ParticipantsSchema } from "../_schema/participantsSchema";
import { prisma } from "@/lib/prisma";
import {v4 as uuidv4} from "uuid";
import { resend } from "@/lib/resend";
export default async function addTicketAction(formData: ParticipantsSchema) {



    const session = await auth();
    const userId = session?.user?.id;
    if(!session || !userId){
        return{
            data: null,
            error: "Usuário nao logado"
        }
    }

    function generateManualCode(): string{
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

  const qrCodeData = uuidv4();
  const manualCode = generateManualCode();

    try{
        const createTicket = await prisma.ticket.create({
            data: {
                participantName: formData.participantName,
                participantEmail: formData.participantEmail,
                eventId: formData.eventId,
                qrCodeData: qrCodeData,
                manualCode: manualCode// Replace with actual QR code data
            },
        });
   
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


        return{
            data: createTicket,
            error: null
        }



}catch(err){
    console.error(err);
    return{
        data: null,
        error: "Erro ao adicionar ingresso"
    }
}
}