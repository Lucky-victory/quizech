import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { apiRoutes } from "./routes/api";
import { pagesRoutes } from "./routes/pages";
import dotenv from "dotenv";
import { db } from "./db/db";
import { users } from "./db/schema";
dotenv.config();

console.log("database", { db });

const query = async () => {
  const add =await db.insert(users).values({
    name:'Lucky victory',email:'luckyvictory54@gmail.com'
  })
 const usersData=await db.select().from(users)
  console.log({ users:usersData, add });
};
query();
const app = new Hono();

app.route("/api", apiRoutes);

app.route("/", pagesRoutes);
app.get("/", (c) => {
  return c.text("it works");
});

serve(app);
