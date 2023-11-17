import { Router } from "express";
import logger from "./utils/logger";
import db from "./db";

const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to rhythm-code!
 *     responses:
 *       200:
 *         description: Returns a hello world.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Hello world
 */
router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

/**
 * @openapi
 * /rhythms:
 *   get:
 *     description: Get rhythms
 *     responses:
 *       200:
 *         description: Returns a list of rhythm objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - id
 *                 - rhythm
 *                 - language
 *                 - year_start
 *                 - year_end
 *                 - location
 *                 - region
 *                 - map_id
 *                 - rhythm_code
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Rhythm ID
 *                 rhythm:
 *                   type: string
 *                   description: Rhythm name
 *                 language:
 *                   type: string
 *                   description: Language associated with rhythm
 *                 year_start:
 *                   type: string
 *                   description: First year recorded
 *                 year_end:
 *                   type: string
 *                   description: Latest year recorded
 *                 video:
 *                   type: string
 *                   description: Rhythm video URL
 *                 audio:
 *                   type: string
 *                   description: Rhythm audio URL
 *                 image:
 *                   type: string
 *                   description: Rhythm image URL
 *                 description:
 *                   type: string
 *                   description: Rhythm description
 *                 location:
 *                   type: string
 *                   description: Parent rhythm code location
 *                 region:
 *                   type: string
 *                   description: Parent rhythm code region
 *                 map_id:
 *                   type: string
 *                   description: Location ID on map image
 *                 rhythm_code:
 *                   type: string
 *                   description: Parent rhythm code name
 */
router.get("/rhythms", function (req, res) {
	db.query(
		`SELECT
			rhythms.id,
			rhythms.rhythm,
			rhythms.language,
			rhythms.year_start,
			rhythms.year_end,
			rhythms.video,
			rhythms.audio,
			rhythms.image,
			rhythms.description,
			rhythm_codes.location,
			rhythm_codes.region,
			rhythm_codes.map_id,
			rhythm_codes.rhythm_code
		FROM rhythms
		INNER JOIN rhythm_codes ON rhythm_codes.id = rhythm_code_id
		ORDER BY id`
	)
		.then((result) => {
			res.json(result.rows);
		})
		.catch((error) => {
			return res.status(500).json({ error: error });
		});
});

/**
 * @openapi
 * /rhythm_codes:
 *   get:
 *     description: Get parent rhythm codes
 *     responses:
 *       200:
 *         description: Returns a list of rhythm code objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - location
 *                 - region
 *                 - map_id
 *                 - rhythm_code
 *               properties:
 *                 location:
 *                   type: string
 *                   description: Parent rhythm code location
 *                 region:
 *                   type: string
 *                   description: Parent rhythm code region
 *                 map_id:
 *                   type: string
 *                   description: Location ID on map image
 *                 rhythm_code:
 *                   type: string
 *                   description: Parent rhythm code name
 */
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
