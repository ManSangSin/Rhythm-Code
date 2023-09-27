import { Router } from "express";

import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});
let rhythms = require("./data/rhythmsData.json");

// Create a GET endpoint (rhythms)
router.get("/rhythms", (req, res) => {
	res.json(rhythms);
});
export default router;
