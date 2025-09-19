
import { compareSync } from "bcryptjs";
import { prisma } from "./prisma";

export async function findUserByCredentials(email: string, password: string) {

    const user = await prisma.user.findFirst({
        where: {
            email: email,
            
        }
    });

    if(!user){
        return{
            data: null,
            error: "Usuário nao encontrado"
        }
    }

    const passwordMatch = compareSync(password, user.password);
    if(passwordMatch){
        return{
            data: user,
            error: null
        }
    }


    return null
}