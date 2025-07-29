import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const getTodos = query({
  handler: async (ctx) => {
   const todos = await ctx.db.query("todos").order("desc").collect()
    return todos
  }
})


export const addTodo = mutation({
  args: { text: v.string() },
  handler: async(ctx, args) => {
    const todoId = await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false
    })
    return todoId
  }
}) 

export const toggleTodo = mutation({
  args: { todoId: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.todoId)
    if (!todo) {
      throw new Error("Todo not found")
    }
    await ctx.db.patch(args.todoId, {
      isCompleted: !todo.isCompleted
    })
  }
})