"use server";


import { revalidatePath } from "next/cache";
import { LoginSchema } from "../_schema/loginSchema";
import { signIn } from "@/lib/auth";




export default async function LoginActions(formData: LoginSchema) {
  try {
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (res?.error) {
      return { success: false, error: res.error };
    }
 revalidatePath("/");
    return { success: true };

  } catch (err) {
    console.error(err);
    return { success: false, error: "Usuário não encontrado" };
  }
}
