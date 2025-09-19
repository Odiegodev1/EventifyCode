"use client"
import { Zap } from "lucide-react";

export function Header(){
  return(
    <header className="flex flex-col items-center  justify-center space-y-8">
                <div className="flex max-w-xs items-center w-full justify-center p-1  bg-purple-600/20 rounded-full">
                   <h1 className="flex py-1  text-sm items-center gap-2 px-2 text-purple-500"> <Zap /> Gerenciamento de Eventos com QR Code</h1>
                </div> 
                <main className="flex flex-col items-center justify-center space-y-4 max-w-xs">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r p-2 from-purple-700 to-pink-500 bg-clip-text text-transparent">EventifyCode</h1>
                    
                </main>
            </header>
  )
}