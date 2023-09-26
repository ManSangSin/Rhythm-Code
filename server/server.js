import http from "node:http";

import app from "./app";
import { connectDb, disconnectDb,pool } from "./db";
import config from "./utils/config";
import logger from "./utils/logger";

const server = http.createServer(app);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	logger.info("listening on: %s", bind);
});

process.on("SIGTERM", () => server.close(() => disconnectDb()));

connectDb().then(() => server.listen(config.port));


let rhythms = require("./rhythmsData.json");

//Create a GET endpoint (rhythms)
app.get("/rhythms", (req, res) => {
	res.json(rhythms);
});


// app.get("/rhythms", function (req, res) {
// 	pool.query("SELECT * FROM rhythmsTest", (error, result) => {
// 		if (!error) {
// 			res.json(result.rows);
// 		} else {
// 			console.log(error.message);
// 		}
// 		pool.end;
// 	});
// });