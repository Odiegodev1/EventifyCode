import { z} from "zod";

export const loginSchema = z.object({
   
    email: z.string().min(1, "Email e Obrigatorio"),
    password: z.string().min(1, "Senha e Obrigatorio"),
});


export type LoginSchema = z.infer<typeof loginSchema>;