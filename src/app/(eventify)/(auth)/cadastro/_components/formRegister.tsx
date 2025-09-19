"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LogIn } from "lucide-react"
import { useForm } from "react-hook-form"
import { RegisterSchema, registerSchema } from "../_schema/registerSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import RegisterAction from "../__actions/RegisterActions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function FormRegister() {
  const router = useRouter();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const handleRegister = async (data: RegisterSchema) => {
    try {
      const response = await RegisterAction(data)
     if(response.error){
    toast.error(response.error)
    } else {
    toast.success("Usuário cadastrado com sucesso")
    form.reset() // opcional: limpa os campos
    router.refresh()
    }

      
    } catch (err) {
      console.error(err)
      
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleRegister)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  className="border-2 border-purple-900"
                  placeholder="Diego S."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          Fazer Cadastro <LogIn className="size-5" />
        </Button>

      
      </form>
    </Form>
  )
}
