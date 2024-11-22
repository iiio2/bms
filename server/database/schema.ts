import {
  integer,
  pgTable,
  varchar,
  pgEnum,
  timestamp,
} from 'drizzle-orm/pg-core'

export const categoryEnum = pgEnum('category', [
  'horror',
  'history',
  'travel',
  'politics',
  'fiction',
])

export const roleEnum = pgEnum('roles', [
  'Super Admin',
  'Admin',
  'User',
  'Author',
])

export const booksTable = pgTable('books', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  desc: varchar({ length: 255 }).notNull(),
  author: varchar({ length: 255 }).notNull(),
  category: categoryEnum().notNull(),
  role: roleEnum().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date', precision: 3 }).$onUpdate(
    () => new Date()
  ),
})
