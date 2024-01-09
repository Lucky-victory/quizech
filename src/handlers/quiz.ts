import { Context } from "hono";

export class QuizHandler {
  static async get(c: Context) {
    try {
      return c.json({
        message: "quiz data retreived",
        data: { id: "34rfd", question: "how are you?" },
      });
    } catch (error) {}
  }

  static async update(c: Context) {
    try {
    } catch (error) {}
  }
  static async delete(c: Context) {
    try {
    } catch (error) {}
  }
  static async checkAnswer(c: Context) {
    try {
    } catch (error) {}
  }
}
