import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { findUserByCredentials } from "./findUserByCredentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@exemplo.com" },
        password: { label: "Senha", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await findUserByCredentials(
          credentials?.email as string,
          credentials?.password as string
        );

        if (user && !user.error) {
          return user.data; // dados do usuário que ficarão na sessão
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" }, // importante para persistir sessão
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as typeof session.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // obrigatório para produção
});
