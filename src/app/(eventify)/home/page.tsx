
import {CardEvents} from "@/components/CardEvents";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { getEventsall } from "@/lib/events";



import { Calendar, Ticket, Users, } from "lucide-react";
import { redirect } from "next/navigation";
import { EventsContent } from "./_components/EventsContent";


export default async function Home() {



       const session = await auth();
      const userId = session?.user?.id;

       
           if(!session) {
               return redirect("/login")
           }
           const events = await getEventsall(userId!);
       console.log(events);

      

    return(
        <section className="flex flex-col items-center min-h-screen w-full">
            <Header />

           <p className="text-center max-w-2xl  mt-4 text-zinc-500">Gerencie entrada de participantes de forma prática e segura. Cada ingresso tem um QR Code único para check-in instantâneo.</p>
            <main className="flex flex-col items-center justify-center space-y-4 w-full">
                <div className="flex flex-col gap-4 md:flex-row justify-center mt-4 w-full max-w-2xl items-center">
                    <Button className="w-full cursor-pointer hover:bg-purple-600  bg-purple-600 hover:shadow-xl trasition-all duration-300 shadow-purple-700 flex  p-8 text-xl font-bold text-white ">Criar um Evento <Ticket className="size-6 ml-1 mt-1" /></Button>
                    <Button className="w-full hover:bg-zinc-800 cursor-pointer bg-transparent border-2 border-purple-600flex  p-8 text-xl font-bold text-white ">Ver Eventos <Calendar className="size-6 ml-1 mt-1" /></Button>
                </div>
                <div className="mt-10 flex flex-col items-center justify-center space-y-4 w-full">
                    <div className="flex items-end justify-between w-full max-w-7xl mb-10">
                    <h1 className="text-xl font-bold">Meus Eventos</h1>    
                    <EventsContent />
                    
                    </div>
                    {!events || events.length === 0 ?

                    <div>
                        <Users className="size-40 mt-20 text-zinc-700" />
                       <p className="text-center mt-4 text-zinc-500">Nenhum evento criado</p>
                    </div>
                     :
                     <CardEvents events={events} /> 
                    
                     }
                </div>
            </main>
        </section>
    )
}