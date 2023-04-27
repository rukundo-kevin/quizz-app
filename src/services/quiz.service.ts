import { PrismaClient, Question, Quiz, UserQuiz } from '@prisma/client';
import prisma from '../client';

const createQuiz = async (quiz: Quiz): Promise<Quiz> => {
  return prisma.quiz.create({ data: quiz });
};

const createUserQuiz = async (score: number, quizId: number, userId: number): Promise<UserQuiz> => {
  return prisma.userQuiz.create({ data: { score, userId, quizId } });
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
  return prisma.question.findMany({
    where: { quizId: id },
    include: {
      answers: {
        select: {
          id: true,
          answerText: true,
          isCorrect: true
        }
      }
    }
  });
};

const getUserQuizScore = async (userId: number): Promise<UserQuiz[]> => {
  return prisma.userQuiz.findMany({ where: { userId }, include: { quiz: true } });
};

export default {
  createQuiz,
  createUserQuiz,
  getQuizById,
  getQuizzCategories,
  getQuizCategoryQuestions,
  updateQuiz,
  deleteQuiz,
  getUserQuizScore
};
