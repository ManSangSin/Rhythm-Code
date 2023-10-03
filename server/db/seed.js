const fs = require("fs");
const { Pool } = require("pg");

require("dotenv").config();
const databaseUrl = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: databaseUrl,
});

const seedQuery = fs.readFileSync("server/db/build-rhythms.sql", { encoding: "utf8" });
pool.query(seedQuery, (err, res) => {
    console.log(err, res);
    console.log("Seeding Completed!");
    pool.end();
});
