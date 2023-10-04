/* eslint-disable no-console */
import { Router } from "express";
import config from "./utils/config";
import logger from "./utils/logger";

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());  // needed to parse JSON data

const router = Router();

// import rhythms from "./data/rhythmsData.json";


const { Pool } = require("pg");


const pool = new Pool({
	// getting db credentials in order to connect
	url: process.env.DATABASE_URL,
	database: process.env.POSTGRES_DB,
	password: process.env.POSTGRES_PASSWORD,
	// database: process.env.POSTGRES_DB,
	// password: process.env.POSTGRES_PASSWORD,
	// user: process.env.POSTGRES_USER,
	// host: process.env.POSTGRES_HOST,

	// port: process.env.POSTGRES_PORT,
	ssl: config.dbUrl.includes("localhost")
		? false
		: { rejectUnauthorized: false },
});

console.log("test DB_USER from config.js:", process.env.DB_USER);
console.log(`test DATABASE_URL from .env = ${process.env.DATABASE_URL}`); // to make sure db credentials saved in .env can/are being accessed

// Log when the database connection is established
pool.connect()
  .then(() => {
    console.log("OKAY! Connected to the database");
  })
  .catch((error) => {
    console.error("NOPE! Can't connect to the database:", error);
  });



router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


// // Create a GET endpoint (rhythms)
// router.get("/rhythms", (req, res) => {
// 	res.json(rhythms);
// });


// HELP!! Cannot connect to DB!!

router.get("/rhythms", function (req, res) {
	pool.query("SELECT * FROM rhythms")
		.then((result) => {
			res.json(result.rows);
		})
		.catch((error) => {
			res.status(500).json({ error: "Internal server error" });
			console.log(error);
		});
});

export default router;
