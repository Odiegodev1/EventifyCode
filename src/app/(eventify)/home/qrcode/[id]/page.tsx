"use client";
import { useState } from "react";

import { checkInTicket } from "../_actions/checkInTicket";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Html5Scanner() {


  const [feedback, setFeedback] = useState<string | null>(null);

  const [manualCode, setManualCode] = useState("");
  const [loading, setLoading] = useState(false);

  
        

  async function handleManualCheckIn() {
    if (!manualCode.trim()) return;
    setLoading(true);

    try {
      const result = await checkInTicket(manualCode.trim());
      setFeedback(result.message);
      toast.success(result.message);
      
    } catch (err) {
      console.error("Erro ao validar manual:", err);
      toast.error("Erro ao validar código manual");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center space-y-6 w-full">
      <h1 className="text-xl font-bold">Check-in por Code</h1>

    
      {/* Feedback */}
      {feedback && (
        <p className="text-lg font-semibold text-center text-purple-600">{feedback}</p>
      )}

      {/* Fallback manual */}
      <div className="w-full max-w-md space-y-2">
        <p className="text-sm text-zinc-500">Ou digite o código manualmente:</p>
        <Input
          placeholder="Código do code"
          value={manualCode}
          onChange={(e) => setManualCode(e.target.value)}
        />
        <Button onClick={handleManualCheckIn} disabled={loading}>
          {loading ? "Validando..." : "Validar código"}
        </Button>
      </div>
    </div>
  );
}
