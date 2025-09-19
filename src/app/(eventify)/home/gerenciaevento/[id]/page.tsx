

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { prisma } from "@/lib/prisma";
import { Calendar, CheckCircle,  Locate,  Timer, User, Users } from "lucide-react";
import { FormAddParticipants } from "./_compoents/FormAddParticipants";


import { CardInfoParticipants } from "./_compoents/cardInfoPartipants";
import { ButtonBack } from "./_compoents/buttonback";

interface Props {
    params: { id: string };
}

export default async function GerenciaEvents({params}: Props) {
    const id = params.id
    const event = await prisma.event.findUnique({
        where: { id },
        include: {
            tickets: {
            include: {
                checkIn: true, // pega se existe check-in
            },
            },
        },
        });

        const totalParticipants = event?.tickets.length || 0;
        const checkeddInCount = event?.tickets.filter(ticket => ticket.checkIn !== null).length || 0;
        const pendingCout = totalParticipants - checkeddInCount;
        
  
    if(!event) return <h1>Evento nao encontrado</h1>;

  
    return(
        <section className="flex flex-col min-h-screen w-full ">
          <header className="flex items-center justify-between -mt-5">
            <ButtonBack />

            <h1 className="font-bold text-xl text-purple-500">{event.title}</h1>
          </header>

          <main className="flex flex-col  mt-9 gap-4 w-full  items-center md:flex-row">
             <Card className="p-3 px-0 bg-transparent border-zinc-400 w-full ">
                <CardContent className="px-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-500 w-12 h-12 flex items-center justify-center rounded-md">
                        <Users />
                    </div>
                    <div>
                        <p className="text-zinc-500 font-sans">Participantes</p>
                        <h1 className="font-semibold text-lg">{totalParticipants}/{event.capacity}</h1>
                    </div>
                    </div>
                </CardContent>
             </Card>

                   <Card className="p-3 px-0 bg-transparent border-zinc-400 w-full">
                <CardContent className="px-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-emerald-500 w-12 h-12 flex items-center justify-center rounded-md">
                        <CheckCircle />
                    </div>
                    <div>
                        <p className="text-zinc-500 font-sans">Check-ins</p>
                        <h1 className="font-semibold text-lg">{checkeddInCount}</h1>
                    </div>
                    </div>
                </CardContent>
             </Card>

                    <Card className="p-3 px-0 bg-transparent border-zinc-400 w-full">
                <CardContent className="px-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-orange-500 w-12 h-12 flex items-center justify-center rounded-md">
                        <Timer />
                    </div>
                    <div>
                        <p className="text-zinc-500 font-sans">Pendente</p>
                        <h1 className="font-semibold text-lg">{pendingCout} </h1>
                    </div>
                    </div>
                </CardContent>
             </Card>
          </main>

          <main className="mt-9 space-y-4">
             <Card className="bg-transparent border-zinc-400">
                <CardHeader>
                    <CardTitle className="text-lg font-bold mb-2">Detalhes do Evento</CardTitle>
                    <CardDescription className="flex items-center gap-2"><Calendar />{event.date.toLocaleDateString()}</CardDescription>
                    <CardDescription className="flex items-center gap-2"><Locate />{event.location}</CardDescription>
                </CardHeader>
                </Card>


                <Card className="bg-transparent border-zinc-400">
                <CardHeader>
                    <CardTitle className="text-lg flex gap-2 font-bold mb-2"><User />Adicionar Participantes</CardTitle>
               
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                 <FormAddParticipants eventId={id}  />
                </CardContent>

             </Card>

                  <Card className="bg-transparent border-zinc-400">
                <CardHeader>
                    <CardTitle className="text-lg flex gap-2 font-bold mb-2">Lista de Participantes <span>({event.tickets.length})</span></CardTitle>
               
                </CardHeader>
                <CardContent className="flex items-center flex-col gap-4">
                   {!event?.tickets.length ? (<p className="text-zinc-500">Nenhum participante registrado</p>):(<CardInfoParticipants tickets={event.tickets}/>)
                  
                    }
                  
                    
                
                </CardContent>

             </Card>
          </main>

        </section>
    )
}