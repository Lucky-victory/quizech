import { Hono } from "hono";
const app = new Hono();
// Quizzes routes
app
  .get("/:category_id?", (c) => c.text("quizzes get"))
  .post("/", (c) => c.text("quizzes add"));

export const quizzesRoutes = app;
