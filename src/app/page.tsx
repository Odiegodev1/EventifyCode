"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          to: formData.get("email"),
          subject: "Mensagem do Next.js",
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();

      if (result.success) {
        setSuccess("E-mail enviado com sucesso!");
      } else {
        setError("Erro ao enviar e-mail.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro inesperado.");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-3 max-w-md mx-auto p-4 border rounded">
      <input
        name="email"
        type="email"
        placeholder="Digite o e-mail do destinatário"
        required
        className="border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Digite sua mensagem"
        required
        className="border p-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar e-mail"}
      </button>

      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
