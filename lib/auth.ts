import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authenticateUser } from "@/lib/userAuth";

export const { handlers, auth, signIn, signOut } = NextAuth({

  providers: [
    Credentials({
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await authenticateUser(
          credentials.email as string,
          credentials.password as string
        );

        return user;
      },
    }),
  ],


  callbacks: {

    async jwt({ token, user }) {

      if (user) {
        token.id = user.id!;
        token.role = user.role;
        token.fullName =( user as any ).fullName;
      }

      return token;
    },


    async session({ session, token }) {

      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.name = token.fullName as string;
      }

      return session;
    },

  },

});