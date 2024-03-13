import 'dotenv/config';
import type { Config } from 'drizzle-kit';
export default {
  schema: './src/drizzle/drizzle.schema.ts',
  out: './drizzle',
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: 'localhost',
    user: 'postgres',
    password: '123',
    database: 'inventory-db',
  },
} satisfies Config;
