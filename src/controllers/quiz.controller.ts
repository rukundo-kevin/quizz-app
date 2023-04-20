import catchAsync from '../utils/catchAsync';
import quizService from '../services/quiz.service';

const getQuiz = catchAsync(async (req, res) => {
  const quiz = await quizService.getQuizById(req.params.quizId);
  res.send(quiz);
});

const getQuizCategories = catchAsync(async (req, res) => {
  const quizzes = await quizService.getQuizzCategories();
  res.send(quizzes);
});

const getQuizCategoryQuestions = catchAsync(async (req, res) => {
  const questions = await quizService.getQuizCategoryQuestions(req.params.quizId);
  res.send(questions);
});

const createQuiz = catchAsync(async (req, res) => {
  const quiz = await quizService.createQuiz(req.body);
  res.status(201).send(quiz);
});

export default {
  getQuiz,
  getQuizCategories,
  createQuiz,
  getQuizCategoryQuestions
};
