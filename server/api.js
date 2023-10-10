import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.get("/rhythms", function (req, res) {
	db.query("SELECT rhythms.id, rhythms.rhythm, rhythms.language, rhythms.year_start, rhythms.year_end, rhythms.video, rhythms.audio, rhythms.description, rhythm_codes.location, rhythm_codes.region, rhythm_codes.leftpx, rhythm_codes.toppx, rhythm_codes.rhythm_code FROM rhythms INNER JOIN rhythm_codes ON rhythm_codes.id = rhythm_code_id ORDER BY id")
		.then((result) => {
			res.json(result.rows);
		})
		.catch((error) => {
			return res.status(500).json({ error: error });
		});
});

router.get("/rhythm_codes", function (req, res) {
	db.query("SELECT * FROM rhythm_codes")
		.then((result) => {
			res.json(result.rows);
		})
		.catch((error) => {
			return res.status(500).json({ error: error });
		});
});


export default router;
