import { Router } from "express";

import logger from "./utils/logger";

import rhythms from "./data/rhythmsData.json";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

// Create a GET endpoint (rhythms)
router.get("/rhythms", (req, res) => {
	res.json(rhythms);
});
export default router;
