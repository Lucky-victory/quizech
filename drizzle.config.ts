import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();
export default {
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URL || "",
  },
} satisfies Config;
