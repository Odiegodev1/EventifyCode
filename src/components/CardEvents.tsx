
"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, LocateIcon,   RectangleEllipsis, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string | Date;
  capacity: number;
  user?: {
    name?: string | null;
  };
}

interface CardEventsProps {
  events: Event[];
}

export const CardEvents: React.FC<CardEventsProps> = ({events}) => {
   const router = useRouter();
   
    const handleclick = (id: string) => {
      router.push(`/home/gerenciaevento/${id}`);
    }
    const handleclickQr = (id: string) => {
      router.push(`/home/qrcode/${id}`);
    }
    return (
        <>
        {events.map((event) => (
              <Card key={event.id} className="w-full max-w-xl  bg-transparent">
                    <CardHeader >
                       <div className="flex items-center justify-between w-full">
                         <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                         <CardDescription>{event.description}</CardDescription>
                         </div>
                        <div className="w-12 flex items-center justify-center rounded-md bg-zinc-500">
                            <h1 className="text-xl font-semibold text-zinc-900">{event.capacity}</h1>
                        </div>
                       </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-4">
                            <article className="flex justify-start text-zinc-500 gap-2">
                              <Calendar />
                              {typeof event.date === "string" ? event.date : event.date.toLocaleDateString()} as 22:00
                            </article>
                            
                            <article className="flex justify-start text-zinc-500 gap-2"><LocateIcon />{event.location}</article>
                        
                            <article className="flex justify-start text-zinc-500 gap-2"><Users />{event.capacity} Participantes</article>
                        </div>
                    </CardContent>
                      <CardFooter  className="flex max-w-xl gap-4">
                      
                     <Button
                     onClick={() => handleclick(event.id)}
                     className="flex-1 w-full bg-purple-600 hover:bg-purple-500 text-white">Gerenciar </Button>
                      <Button
                        onClick={() => handleclickQr(event.id)}
                      variant="outline" className="w-20"><RectangleEllipsis /></Button>
                      
                      </CardFooter>
                    </Card>   
        ))}
        </>
    )}