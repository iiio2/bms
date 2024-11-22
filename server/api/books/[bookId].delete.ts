import { eq } from 'drizzle-orm'
import { booksTable } from '~/server/database/schema'

export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, 'bookId')!)
  await db.delete(booksTable).where(eq(booksTable.id, id))
  return {
    message: 'book has been successfully deleted.',
  }
})
