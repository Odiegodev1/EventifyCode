
import { Header } from "@/components/Header";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Github, } from "lucide-react";
import { FormLogin } from "./_components/loginform";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";



export default async function Login() {
  
    const session = await auth();
    console.log(session);
    if(session) {
        return redirect("/home")
    }
    return(
        <section className="flex flex-col min-h-screen w-full items-center space-y-8">
            <Header />
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription className="mb-4">Entre com suas credenciais</CardDescription>
                    <div className="flex items-center  gap-3 border rounded-md p-2 px-3 border-purple-500 mt-1 hover:bg-purple-500/20 transition-all duration-500 cursor-pointer" >
                    <div className="p-2 rounded-md bg-purple-500"><Github className="size-6" /></div>
                    <h1 className="text-sm font-semibold">Entre com o Github</h1>
                </div>
                <p className="text-center mt-4 text-zinc-500">ou</p>

                </CardHeader>
                <CardContent className="flex flex-col gap-4 mb-4 -mt-4">
                  <FormLogin />
                    </CardContent>
                
            </Card>
           
           
        </section>
    )
}