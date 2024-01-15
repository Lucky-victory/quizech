import { QuizzesController } from "@/controllers/quizzes";
import { Context } from "hono";

export class QuizzesHandler {
  static async getAll(c: Context) {
    try {
      const { category_id } = c.req.param();
      const res = await QuizzesController.getAll(category_id);

      return c.json(res, 200);
    } catch (error) {
      return (
        c.json({
          message: c.error?.message,
        },500)
      );
    }
  }
  static async create(c: Context) {
    try {
      const data = await c.req.json();
      const res = await QuizzesController.create(data);

      return c.json(res, 201);
    } catch (error) {
      return c.json(
        {
          message: c.error?.message,
        },
        500
      );
    }
  }
}
