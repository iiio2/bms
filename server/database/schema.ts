import { integer, pgTable, varchar, pgEnum } from 'drizzle-orm/pg-core'

export const categoryEnum = pgEnum('category', [
  'horror',
  'history',
  'travel',
  'politics',
  'fiction',
])

export const booksTable = pgTable('books', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  desc: varchar({ length: 255 }).notNull(),
  author: varchar({ length: 255 }).notNull(),
  category: categoryEnum().notNull(),
})
