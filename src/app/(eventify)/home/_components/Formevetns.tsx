"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar, FileText, Locate, Ticket, Users } from "lucide-react";
import { useForm } from "react-hook-form";
import { registerEventSchema, RegisterEventSchema } from "../_schema/registerEvent";
import { zodResolver } from "@hookform/resolvers/zod";
import RegistereventActions from "../_actions/RegistereventActionns";
import { toast } from "sonner";

export function Formevents() {
    const form = useForm<RegisterEventSchema>({
        resolver: zodResolver(registerEventSchema),
        defaultValues: {
            title: "",
            description: "",
            date: "",
            capacity:"",
            location: "",
        },
    });

    const onSubmit = async (data: RegisterEventSchema) => {
   try{
         const response = await RegistereventActions(data);
         if(response.error){
             toast.error(response.error);
         }else{
             toast.success("Evento cadastrado com sucesso");
             form.reset();
         }
   }catch(err){
    console.error(err);
   }
    }
    return (
         <Form {...form}>
            <form
            className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}>
               <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                    <FormItem>
                        <FormLabel className="flex items-center gap-2 text-zinc-500"><FileText className="size-4" />Nome</FormLabel>
                         <FormControl>
                            
                             <Input 
                             
                             {...field}
                              placeholder="Nome do seu evento" />
                        
                         </FormControl>
                         <FormMessage />
                    </FormItem>
                )}
               />
             <FormField
                control={form.control}
                name="description"
                render={({field}) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-zinc-500">Descrição</FormLabel>
                         <FormControl>
                        
                             <Input 
                             
                             {...field}
                              placeholder="Descreva seu evento" />
                         </FormControl>
                         <FormMessage />
                    </FormItem>
                )}
               />
             <FormField
                control={form.control}
                name="date"
                render={({field}) => (
                    <FormItem>
                         <FormLabel className="flex items-center gap-2 text-zinc-500"><Calendar className="size-4" />Nome</FormLabel>
                         <FormControl>
                        
                             <Input 
                             type="datetime-local"
                             {...field}
                              placeholder="Descreva seu evento" />
                         </FormControl>
                         <FormMessage />
                    </FormItem>
                )}
               />
         <FormField
                control={form.control}
                name="capacity"
                render={({field}) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-zinc-500"><Users className="size-4" />Nome</FormLabel>
                         <FormControl>
                        
                             <Input 
                             type="number"
                             {...field}
                              placeholder="Descreva seu evento" />
                         </FormControl>
                         <FormMessage />
                    </FormItem>
                )}
               />
         <FormField
                control={form.control}
                name="location"
                render={({field}) => (
                    <FormItem>
                         <FormLabel className="flex items-center gap-2 text-zinc-500"><Locate className="size-4" />Nome</FormLabel>
                         <FormControl>
                        
                             <Input 
                             
                             {...field}
                              placeholder="ex: Rua das flores, 123" />
                         </FormControl>
                         <FormMessage />
                    </FormItem>
                )}
               />
            <div className="flex flex-col gap-2 mt-4">
                <Button className="flex gap-2 bg-purple-600 hover:bg-purple-700 text-white w-full">Criar Evento <Ticket className="size-6 ml-1 mt-1" /></Button>
                <Button variant="outline" className="flex gap-2 w-full">Cancelar</Button>
            </div>
            </form>

         </Form>
    );
}