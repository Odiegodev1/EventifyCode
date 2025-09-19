import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ManualCodeDialog } from "./Dowloaqrcode";

interface Ticket {
  id: string;
  participantName: string;
  participantEmail: string;
  status: string;
  manualCode: string;
  checkIn: { checkInTime: Date } | null;
}

interface ParticipantsListProps {
  tickets: Ticket[];
}

export function CardInfoParticipants({ tickets }: ParticipantsListProps) {
  return (
    <>
      {tickets.map(ticket => (
        <Card key={ticket.id} className="w-full mb-3">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle className="text-lg font-bold flex items-center gap-3">
                  {ticket.participantName}{" "}
                  <span className="text-xs text-white bg-green-800 p-1.5 rounded-md">
                    {ticket.status}
                  </span>
                  <ManualCodeDialog manualCode={ticket.manualCode} />
                </CardTitle>
                <CardDescription>{ticket.participantEmail}</CardDescription>
                <CardDescription>
                  checked-in:{" "}
                  {ticket.checkIn?.checkInTime
                    ? ticket.checkIn.checkInTime.toLocaleString()
                    : "Not checked-in"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
