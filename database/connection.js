const pg = require("pg");
const DB_URL = process.env.DATABASE_URL;

const dotenv = require("dotenv");

dotenv.config();

if (!DB_URL) throw new Error("no database URL env var!");

const options = {
    connectionString: DB_URL,
};

const db = new pg.Pool(options);

export { db };