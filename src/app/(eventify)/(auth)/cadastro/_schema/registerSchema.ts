import { z} from "zod";

export const registerSchema = z.object({
    name:z.string().min(1, "Nome e Obrigatorio"),
    email: z.string().min(1, "Email e Obrigatorio"),
    password: z.string().min(1, "Senha e Obrigatorio"),
});


export type RegisterSchema = z.infer<typeof registerSchema>;