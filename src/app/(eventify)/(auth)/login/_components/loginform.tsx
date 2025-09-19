"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { LogIn } from "lucide-react"
import { useForm } from "react-hook-form"
import { loginSchema, LoginSchema } from "../_schema/loginSchema"
import { useRouter } from "next/navigation"
import LoginActions from "../_actions/loginActions"
import { toast } from "sonner"


export function FormLogin() {
  
const router = useRouter();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
     
      email: "",
      password: "",
    },
  })

  const handleLogin = async (data: LoginSchema) => {
    try{
        const response = await LoginActions(data);
        if(response.error){
            toast.error(response.error);
        }else{
            toast.success("Logado com sucesso");
            router.refresh()
        }

    }catch(err){
        console.error(err);
    }

      

  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="border-2 border-purple-900"
                  placeholder="example@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="border-2 border-purple-900"
                  placeholder="******************"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-purple-500 mt-4 hover:bg-purple-600 cursor-pointer text-white font-semibold text-lg"
        >
          Fazer Login <LogIn className="size-5" />
        </Button>

      
      </form>
    </Form>
  )
}
