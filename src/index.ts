import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { apiRoutes } from "./routes/api";
import { pagesRoutes } from "./routes/pages";
const app = new Hono();

app.route("/api", apiRoutes);

app.route("/", pagesRoutes);
app.get("/", (c) => {
  return c.text("it works");
});

serve(app);
