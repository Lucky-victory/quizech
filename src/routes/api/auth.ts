import { AuthHandler } from "@/handlers/auth";
import { Hono } from "hono";
const app = new Hono();
// Auth routes
app.post("/sign-in", AuthHandler.signIn);

app.post("/sign-up", AuthHandler.signUp);

export const authRoute = app;
