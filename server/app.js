import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import apiRouter from "./api";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";

const swaggerSpec = swaggerJsDoc({
	definition: {
		openapi: "3.0.0",
		info: {
			title: process.env.npm_package_name,
			version: process.env.npm_package_version,
		},
		servers: [{ url: "/api", description: "base path for API proxy" }],
	},
	apis: ["./server/api.js"],
});

const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(clientRouter(apiRoot));

app.use(logErrors());

export default app;
