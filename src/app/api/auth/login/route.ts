import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const POST = async (req: Request) => {
  const { email, senha } = await req.json();

  const [user] = await db.select().from(users).where(eq(users.email, email));
  if (!user) {
    return NextResponse.json(
      { error: "Usuário não encontrado" },
      { status: 404 },
    );
  }

  const isValid = await bcrypt.compare(senha, String(user.password));
  if (!isValid) {
    return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
  }

  return NextResponse.json({
    message: "Login bem-sucedido",
    user: { email: user.email },
  });
};
