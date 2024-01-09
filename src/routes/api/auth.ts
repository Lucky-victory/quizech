import { Hono } from "hono";
const app = new Hono();
// Auth routes
app
  .post("/sign-in", (c) => c.text("auth sign in"))
  .post("/sign-up", (c) => c.text("auth sign up"));

export const authRoute = app;
