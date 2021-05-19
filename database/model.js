import { db } from "../database/connection.js";

export default function getAllProducts() {
  return db.query(`SELECT * FROM cheeses`).then((result) => result.rows);
}
