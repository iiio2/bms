import { eq } from 'drizzle-orm'
import { booksTable } from '~/server/database/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = parseInt(getRouterParam(event, 'bookId')!)
  await db
    .update(booksTable)
    .set({
      name: body.name,
      desc: body.desc,
      author: body.author,
      category: body.category,
    })
    .where(eq(booksTable.id, id))

  return {
    message: 'book has been successfully updated.',
  }
})
