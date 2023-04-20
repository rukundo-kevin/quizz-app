import { PrismaClient, Question, Quiz } from '@prisma/client';
import prisma from '../client';

const createQuiz = async (quiz: Quiz): Promise<Quiz> => {
  return prisma.quiz.create({ data: quiz });
};

const getQuizById = async (id: number): Promise<Quiz | null> => {
  return prisma.quiz.findUnique({ where: { id } });
};

const getQuizzCategories = async (): Promise<Quiz[]> => {
  return prisma.quiz.findMany();
};

const updateQuiz = async (id: number, quiz: Quiz): Promise<Quiz> => {
  return prisma.quiz.update({ where: { id }, data: quiz });
};

const deleteQuiz = async (id: number): Promise<Quiz> => {
  return prisma.quiz.delete({ where: { id } });
};

const getQuizCategoryQuestions = async (id: number): Promise<Question[]> => {
  return prisma.question.findMany({ where: { quizId: id } });
};

export default {
  createQuiz,
  getQuizById,
  getQuizzCategories,
  getQuizCategoryQuestions,
  updateQuiz,
  deleteQuiz
};
