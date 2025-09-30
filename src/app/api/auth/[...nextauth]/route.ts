import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
        email: {
          label: "Email",
          type: "text",
          placeholder: "exemplo@gmail.com",
        },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await getUserByEmail(credentials.email);
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          String(user.password),
        );
        if (!isValid) return null;

        return {
          id: String(user.id),
          nome: String(user.nome),
          email: String(user.email),
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
