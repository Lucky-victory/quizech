import { AuthHandler } from "@/handlers/auth";
import { UserHandler } from "@/handlers/user";
import { Hono } from "hono";
const app = new Hono();
// User routes
app.get("/:user_id_or_username", UserHandler.get);
app.put("/:user_id_or_username/settings/interest", UserHandler.interestSettings);
app.put("/:user_id_or_username/settings/basic", UserHandler.basicSettings);

app.get("/:user_id_or_username/interest", UserHandler.getInterests);
app.get(
  "/:user_id_or_username/quizzes/answered",
  UserHandler.getAnsweredQuizzes
);

export const authRoute = app;
