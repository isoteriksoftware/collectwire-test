import express, { Express } from "express";
import routes from "./routes";

const app: Express = express();

// Configure routes
app.use(routes);

export default app;
