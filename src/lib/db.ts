import { createClient } from "@libsql/client";

const url = (): string => {
  return process.env.TURSO_DATABASE_URL ?? "libsql://database.db";
};

export const client = createClient({
  url: url(),
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Funções auxiliares
export async function createUser(
  email: string,
  senha: string,
  username: string,
) {
  return client.execute(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, senha, username],
  );
}

export async function getUserByEmail(email: string) {
  const res = await client.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return res.rows[0]; // retorna o usuário ou undefined
}
