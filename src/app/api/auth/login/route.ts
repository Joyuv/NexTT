import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/app/api/db/route";

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  const user = await getUserByEmail(email);
  if (!user) {
    return NextResponse.json(
      { error: "Usuário não encontrado" },
      { status: 404 },
    );
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });
  }

  return NextResponse.json({
    message: "Login bem-sucedido",
    user: { email: user.email },
  });
};
