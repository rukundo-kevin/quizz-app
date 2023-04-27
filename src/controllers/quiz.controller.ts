import catchAsync from '../utils/catchAsync';
import quizService from '../services/quiz.service';
import { User } from '@prisma/client';
import httpStatus from 'http-status';

const getQuiz = catchAsync(async (req, res) => {
  const quiz = await quizService.getQuizById(req.params.quizId);
  res.send(quiz);
});

const getQuizCategories = catchAsync(async (req, res) => {
  const quizzes = await quizService.getQuizzCategories();
  res.send(quizzes);
});

const getQuizCategoryQuestions = catchAsync(async (req, res) => {
  const questions = await quizService.getQuizCategoryQuestions(parseInt(req.params.id));
  res.send(questions);
});

const createQuiz = catchAsync(async (req, res) => {
  const quiz = await quizService.createQuiz(req.body);
  res.status(201).send(quiz);
});

const createUserQuiz = catchAsync(async (req, res) => {
  const { score, quizId } = req.body;
  const userQuiz = await quizService.createUserQuiz(score, quizId, (req.user as User).id);
  res.status(httpStatus.CREATED).send({
    message: 'User Quiz scores created successfully',
    data: {
      userQuiz
    }
  });
});

const getUserQuizScore = catchAsync(async (req, res) => {
  const userQuiz = await quizService.getUserQuizScore((req.user as User).id);
  res.send({ data: { message: 'User Quiz scores retrieved successfully', userQuiz } });
});

export default {
  getQuiz,
  getQuizCategories,
  createQuiz,
  createUserQuiz,
  getQuizCategoryQuestions,
  getUserQuizScore
};
