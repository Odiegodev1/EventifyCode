"use server";
import { prisma } from "@/lib/prisma";
import { RegisterEventSchema } from "../_schema/registerEvent";
import { auth } from "@/lib/auth";

export default async function RegistereventActions(formData: RegisterEventSchema) {
    const session = await auth();
    const userId = session?.user?.id;

    if (!session || !userId) {
        return {
            data: null,
            error: "Usuário não logado",
        };
    }
      
    try {
        const formatedDate = new Date(formData.date);
        const formatedCapacity = parseInt(formData.capacity);
        
        const createEvent = await prisma.event.create({
            data: {
                title: formData.title,
                description: formData.description,
                location: formData.location,
                date: formatedDate,        // já é Date
                capacity:formatedCapacity , // já é number
                userId: userId,             // obrigatório
            },
        });

        return {
            data: createEvent,
            error: null,
        };
    } catch (err) {
        console.error(err);
        return {
            data: null,
            error: "Erro ao cadastrar evento",
        };
    }
}
