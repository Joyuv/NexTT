import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser, getUserByEmail } from "@/app/api/db/route";

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  const existing = await getUserByEmail(email);
  if (existing) {
    return NextResponse.json({ error: "Usuário já existe" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await createUser(email, hashed);

  return NextResponse.json({ message: "Usuário criado!" });
};
