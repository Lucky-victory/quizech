import { Hono } from "hono";
const app = new Hono();

app
  .get("/:date?", (c) => c.text("leaderboard get"))
  .post("/", (c) => c.text("leaderboard add"));

export const leaderboardRoute = app;
