"use client"
import { ArrowLeft } from "lucide-react";

export function ButtonBack() {
    return (
        <div 
            onClick={() => window.history.back()}
            className="flex cursor-pointer items-center gap-2 text-zinc-500 text-xl ">
                <ArrowLeft />
                Voltar
            </div>
    );
}