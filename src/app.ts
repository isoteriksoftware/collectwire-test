import express, { Express, Request, Response } from "express";
import routes from "./routes";

const app: Express = express();

// Configure middlewares
app.use(routes);

export default app;
