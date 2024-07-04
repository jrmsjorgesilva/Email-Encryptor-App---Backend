import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
  const sql =
    "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
});
