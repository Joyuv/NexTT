import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET,
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

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email));
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          String(user.password),
        );
        if (!isValid) return null;

        return {
          id: String(user.id),
          name: String(user.username),
          email: String(user.email),
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
