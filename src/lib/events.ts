import { prisma } from "@/lib/prisma";

export async function getEventsall(userId: string) {
  try {
    return await prisma.event.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,     // traz o usuário dono do evento
        tickets: true,  // traz os ingressos relacionados
      },
      orderBy: {
        date: "asc", // ordena por data
      },
    });
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return [];
  }
}
