import { z} from "zod";

export const participantsSchema = z.object({
    participantName:z.string().min(1, "Nome e Obrigatorio"),
    participantEmail: z.string().min(1, "Email e Obrigatorio"),
    eventId: z.string().min(1, "Evento é obrigatório"),
    
});


export type ParticipantsSchema = z.infer<typeof participantsSchema>;