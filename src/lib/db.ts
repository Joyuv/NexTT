import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const url = (): string => {
  return process.env.TURSO_DATABASE_URL ?? "libsql://database.db";
};

const client = createClient({
  url: url(),
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle({ client });
