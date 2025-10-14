import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { campaigns, users } from "@/db/schema"
import { eq } from "drizzle-orm"

export const POST = async (req: Request) => {
    const { name, description, nameowner} = await req.json()
    const [user] = await db.select().from(users).where(eq(users.username, nameowner))
    const id = user.id
    await db
        .insert(campaigns)
        .values({ name: name, description: description, owner_id: id })

    return NextResponse.json({ message: "Adicionado com sucesso!"}, { status: 200 })
}