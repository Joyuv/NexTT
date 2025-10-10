import { relations } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  username: text("username").notNull(),
});

export const campaigns = sqliteTable("campaigns", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  owner_id: integer("owner_id")
    .notNull()
    .references(() => users.id),
});

export const usersRelations = relations(users, ({ many }) => ({
  usersCampaigns: many(usersCampaigns),
}));

export const campaignsRelations = relations(campaigns, ({ many }) => ({
  usersCampaigns: many(usersCampaigns),
}));

export const usersCampaigns = sqliteTable("usersCampaigns", {
  uc_id: integer("uc_id").primaryKey(),
  uc_user_id: integer("uc_user_id")
    .notNull()
    .references(() => users.id),
  uc_campaign_id: integer("uc_campaign_id")
    .notNull()
    .references(() => campaigns.id),
});

export const usersCampaignsRelations = relations(usersCampaigns, ({ one }) => ({
  campaign: one(campaigns, {
    fields: [usersCampaigns.uc_campaign_id],
    references: [campaigns.id],
  }),
  user: one(users, {
    fields: [usersCampaigns.uc_user_id],
    references: [users.id],
  }),
}));
