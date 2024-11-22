import { booksTable } from '~/server/database/schema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await db.insert(booksTable).values(body)
  return {
    message: 'A new book has been successfully created.',
  }
})
