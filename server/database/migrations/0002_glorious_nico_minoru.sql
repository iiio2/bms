CREATE TYPE "public"."users" AS ENUM('Super Admin', 'Admin', 'User', 'Author');--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;