import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Ticket} from "lucide-react"
import { Formevents } from "./Formevetns"

export function EventsContent(){
    return(
      
<Dialog>
  <DialogTrigger asChild >
    <Button variant="outline" className="cursor-pointer">Criar um Evento <Ticket className="size-6 ml-1 mt-1" /></Button>
  </DialogTrigger>
  <DialogContent className="flex flex-col  my-10  ">
    <DialogHeader>
      <DialogTitle>Criar um Evento</DialogTitle>
      <DialogDescription>
       Crie um evento e compartilhe com seus amigos
      </DialogDescription>
    </DialogHeader>
     <Card className="border-zinc-400  bg-transparent">
        <CardContent className="flex  flex-col gap-4">
          <Formevents />
        </CardContent>
     </Card>
  </DialogContent>
</Dialog>

    )
}