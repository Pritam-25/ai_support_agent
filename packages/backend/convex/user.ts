import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getManyUsers = query({
  handler: async (ctx) => {
    const users = await ctx.db.query("user").collect();
    return users;
  }
});

export const addUser = mutation({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    const user = await ctx.db.insert("user", { name });
    return user;
  }
});
