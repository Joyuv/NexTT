import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/lib/db";

export const POST = async (req: Request) => {
  const { email, senha } = await req.json();

  const user = await getUserByEmail(email);
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
