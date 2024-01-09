import { Hono } from "hono";
const app = new Hono();
// Quiz routes
app
  .get("/:quiz_id", (c) => c.text("quiz get"))
  .put("/:quiz_id", (c) => c.text("quiz update"))
  .delete("/:quiz_id", (c) => c.text("quiz delete"));

// check correct answer
app.get("/:quiz_id/check-answer", (c) => c.text("quiz correct answer"));

export const quizRoutes = app;
