ALTER TYPE "public"."users" RENAME TO "roles";--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "role" "roles" NOT NULL;