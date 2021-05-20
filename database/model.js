import { db } from "../database/connection.js";

export function getAllProducts() {
  return db.query(`SELECT * FROM cheeses`).then((result) => result.rows);
}

export function getAllProductNames() {
  return db.query(`SELECT name FROM cheeses`).then((result) => result.rows);
}
