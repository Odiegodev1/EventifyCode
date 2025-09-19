"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { participantsSchema, ParticipantsSchema } from "../_schema/participantsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import addTicketAction from "../_actions/addTicketActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface FormAddParticipantsProps {
    eventId: string;
}

export function FormAddParticipants({eventId}: FormAddParticipantsProps) {
   const router = useRouter();
   
    const form = useForm<ParticipantsSchema>({
        resolver: zodResolver(participantsSchema),
        defaultValues: {
            participantName: "",
            participantEmail: "",
            eventId: eventId,
        }
    });
    const onSubmit = async (data: ParticipantsSchema) => {
        try{
           const response = await addTicketAction(data);
           if(response.error){
            toast.error(response.error);
           }else{
            toast.success("Participante adicionado com sucesso");
            form.reset();
            router.refresh();
           }
        }catch(err){
            console.error(err);
        }
   
    }
    
    return (
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4">
                     <FormField 
                     control={form.control}
                     name="participantName"
                     render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome do Participante</FormLabel>
                            <FormControl>
                                <Input {...field}
                                placeholder="Digite o nome do participante"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                     )}
                     />

                       <FormField 
                     control={form.control}
                     name="participantEmail"
                     render={({ field }) => (
                        <FormItem>
                            <FormLabel>Gmail do Participante</FormLabel>
                            <FormControl>
                                <Input {...field}
                                placeholder="example@gmail.com"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                     )}
                     />

                          <Button  type="submit" className="  bg-purple-500 hover:bg-purple-600 cursor-pointer text-white font-semibold text-lg w-full">Adicionar Participante</Button>
               
            </form>
        </Form>
      
    );
}