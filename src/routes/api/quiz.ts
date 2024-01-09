import { QuizHandler } from "@_/src/handlers/quiz";
import { Hono } from "hono";
const app = new Hono();
// Quiz routes
app
  .get("/:quiz_id", QuizHandler.get)
  .put("/:quiz_id", QuizHandler.update)
  .delete("/:quiz_id", QuizHandler.delete);

// check correct answer
app.get("/:quiz_id/check-answer", QuizHandler.checkAnswer);

export const quizRoutes = app;
