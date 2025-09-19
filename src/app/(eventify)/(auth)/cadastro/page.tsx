import { Header } from "@/components/Header";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { FormRegister } from "./_components/formRegister";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Cadastro() {
    const session = await auth();
        console.log(session);
        if(session) {
            return redirect("/home")
        }
    return(
        <section className="flex flex-col min-h-screen items-center w-full space-y-8">
            <Header />
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl">Cadastro</CardTitle>
                    <CardDescription className="mb-4">Entre com suas Informações</CardDescription>
                 

                </CardHeader>
                <CardContent className="flex flex-col gap-4 mb-4 -mt-4">
                 
               <FormRegister />
                </CardContent>
                
            </Card>
           
           
        </section>
    )
}