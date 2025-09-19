"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

interface ManualCodeDialogProps {
  manualCode: string;
}

export function ManualCodeDialog({ manualCode }: ManualCodeDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Mostrar Código</Button>
      </DialogTrigger>

      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Seu Código Manual</DialogTitle>
        </DialogHeader>
        <div className="text-center text-lg py-4 font-mono bg-gray-100 rounded">
          {manualCode}
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
