"use server";

import { auth } from "@/lib/auth";
import { ParticipantsSchema } from "../_schema/participantsSchema";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";


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

 
    return { data: createTicket, error: null };
  } catch (err) {
    console.error("Erro ao criar ingresso:", err);
    return { data: null, error: "Erro ao adicionar ingresso" };
  }
}
