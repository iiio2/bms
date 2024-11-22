import { booksTable } from '~/server/database/schema'

export default defineEventHandler(async (event) => {
  const books = await db.select().from(booksTable)
  return {
    books,
  }
})
