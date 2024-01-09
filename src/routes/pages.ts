import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("pages route"));

export const pagesRoutes = app;
