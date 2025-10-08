import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const POST = async (req: Request) => {
  const { username, email, password } = await req.json();

  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.email, email));
  if (existing) {
    return NextResponse.json({ error: "Usuário já existe" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await db
    .insert(users)
    .values({ email: email, password: hashed, username: username });

  return NextResponse.json({ message: "Usuário criado!" });
};
