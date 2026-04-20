import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.PG_HOST || "localhost";
const databaseUser = process.env.PG_USER || "postgres";
const databasePassword = process.env.PG_PASSWORD || "password";
const databaseName = process.env.PG_DB || "mydatabase";
const databasePort = process.env.PG_PORT || 5432;

const pool = new Pool({
  user: databaseUser,
  host: databaseUrl,
  database: databaseName,
  password: databasePassword,
  port: databasePort,
});
export default pool;