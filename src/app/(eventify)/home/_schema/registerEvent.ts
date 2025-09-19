import { z} from "zod";

export const registerEventSchema = z.object({
    title:z.string().min(1, "Nome e Obrigatorio"),
    description: z.string().min(1, "Email e Obrigatorio"),
    date: z.string().min(1, "Data e Obrigatorio"),
    capacity: z.string().min(1, "Capacidade e Obrigatorio"),
    location: z.string().min(1, "Local e Obrigatorio"),
});


export type RegisterEventSchema = z.infer<typeof registerEventSchema>;