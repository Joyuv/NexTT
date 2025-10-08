import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  username: text("username").notNull(),
});

export const campaigns = sqliteTable("campaigns", {
  id: integer("id").primaryKey(),
  owner: text(),
});
