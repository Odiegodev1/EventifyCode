"use server";

import { prisma } from "@/lib/prisma";

export async function checkInTicket(code: string) {
  const ticket = await prisma.ticket.findFirst({
    where: {
      OR: [
        { qrCodeData: code },
        { manualCode: code }
      ]
    },
    include: { checkIn: true }
  });

  if (!ticket) {
    return { success: false, message: "Ingresso não encontrado" };
  }

  if (ticket.status === "CHECKED_IN") {
    return { success: false, message: "Ingresso já foi utilizado" };
  }

  await prisma.checkIn.create({
    data: {
      ticketId: ticket.id
    }
  });

  await prisma.ticket.update({
    where: { id: ticket.id },
    data: { status: "CHECKED_IN" }
  });

  return { success: true, message: "Check-in realizado com sucesso!" };
}
