import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/rhythms", function (req, res) {
	db.query("SELECT * FROM rhythms")
		.then((result) => {
			res.json(result.rows);
		})
		.catch((error) => {
			return res.status(500).json({ error: error });
		});
});

export default router;
