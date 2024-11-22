CREATE TYPE "public"."category" AS ENUM('horror', 'history', 'travel', 'politics', 'fiction');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "books" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "books_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"desc" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"category" "category" NOT NULL
);
--> statement-breakpoint
DROP TABLE "users" CASCADE;