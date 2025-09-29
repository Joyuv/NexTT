import { createClient } from "@libsql/client";

export const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

await client.execute(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    senha TEXT
  )
`);

// Funções auxiliares
export async function createUser(email: string, password: string) {
  return client.execute("INSERT INTO users (email, senha) VALUES (?, ?)", [
    email,
    password,
  ]);
}

export async function getUserByEmail(email: string) {
  const res = await client.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return res.rows[0]; // retorna o usuário ou undefined
}
