import { Hono } from "hono";
import { quizRoutes } from "./quiz";
import { quizzesRoutes } from "./quizzes";
import { authRoute } from "./auth";
import { leaderboardRoute } from "./leaderboard";

const app = new Hono();

app.get("/", (c) => c.text("api route"));

app.route("/quiz", quizRoutes);
app.route("/quizzes", quizzesRoutes);
app.route("/auth", authRoute);
app.route("/leaderboard", leaderboardRoute);

export const apiRoutes = app;
