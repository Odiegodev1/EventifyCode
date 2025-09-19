"use server";

import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "../_schema/registerSchema";
import { hashSync } from "bcryptjs";

export default async function RegisterAction(formData: RegisterSchema) {
  const userExists = await prisma.user.findUnique({
    where: {
      email: formData.email
    }
  });

  if (userExists) {
    return {
      data: null,
      error: "Usuário já cadastrado"
    };
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: formData.email,
        name: formData.name,
        password: hashSync(formData.password)
      },
 
    });

    
 // deve ser []

    return {
      data: user,
      error: null
    };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      error: "Erro ao cadastrar usuário"
    };
  }
}
