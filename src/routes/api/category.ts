import { CategoryHandler } from "@/handlers/category";
import { Hono } from "hono";
const app = new Hono();

app
  .get("/", CategoryHandler.getAll)
  .get("/:category_id", CategoryHandler.getOne)
  .post("/", CategoryHandler.create)
  .put("/:category_id", CategoryHandler.update)
  .delete("/:category_id", CategoryHandler.delete);

export const categoryRoute = app;
