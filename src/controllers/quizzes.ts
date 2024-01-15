export class QuizzesController {
  static async getAll(categoryId?: string) {
    try {
      return { data: [{}], message: "Quizzes retrieved successfully" };
    } catch (error) {
      throw error;
    }
  }
  static async create(quiz: any) {
    try {
      return {
        message: "Quiz added successfully",
        data: {},
      };
    } catch (error) {
      throw error;
    }
  }
}
