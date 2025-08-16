import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getManyUsers = query({
  handler: async (ctx) => {

    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }

    const users = await ctx.db.query("user").collect();
    return users;
  }
});

export const addUser = mutation({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {

    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not authenticated");
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new Error("User is not part of an organization");
    }

    const trimmed = name.trim();
    if (trimmed.length === 0) {
      throw new Error("Name cannot be empty");
    }
    if (trimmed.length > 64) {
      throw new Error("Name too long");
    }
    const userId = await ctx.db.insert("user", { name: trimmed });
    return userId;
  }
});
