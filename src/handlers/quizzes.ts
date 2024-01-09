import { Context } from "hono";

export class QuizzesHandler {
  static async getAll(c: Context) {
    try {
      return c.json({
        message: "quizzes data retreived",
        data: [{ id: "34rfd", question: "how are you?" }],
      });
    } catch (error) {}
  }
  static async create(c: Context) {
    try {
    } catch (error) {}
  }
}
