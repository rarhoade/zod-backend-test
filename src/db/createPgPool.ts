import { Pool } from 'pg';

export function createPgPool(): Pool {
  return new Pool({
    user: 'myuser',
    password: 'mypassword',
    host: 'localhost',
    port: 5432,
    database: 'mydb',
  });
}