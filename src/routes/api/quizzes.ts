import { QuizzesHandler } from "@/handlers/quizzes";
import { Hono } from "hono";
const app = new Hono();
// Quizzes routes
app
  .get("/:category_id?", QuizzesHandler.getAll)
  .post("/", QuizzesHandler.create);

export const quizzesRoutes = app;
