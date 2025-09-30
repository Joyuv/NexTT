import { client } from "@/lib/db";

export const GET = async () => {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      username TEXT,
    )
  `);

  return new Response("Tabela users criada!");
};
