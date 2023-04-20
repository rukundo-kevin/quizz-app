import { PrismaClient, Quiz, Question, Answer } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

type QuizWhereUniqueInput = {
  id?: number;
  title?: string;
};

const quizTitles: string[] = [
  'Tech History',
  'Programming',
  'Web Development',
  'Artificial Intelligence'
];

const generateRandomWord = (): string => {
  const words: string[] = [
    'algorithm',
    'bug',
    'database',
    'frontend',
    'backend',
    'function',
    'interface',
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'API',
    'microservice',
    'machine learning',
    'neural network',
    'data science'
  ];
  return words[Math.floor(Math.random() * words.length)];
};

const generateRandomAnswers = async (
  correctAnswer: string,
  questionId: number
): Promise<Answer[]> => {
  const incorrectAnswers: string[] = [];
  while (incorrectAnswers.length < 3) {
    const answer: string = generateRandomWord();
    if (answer !== correctAnswer && !incorrectAnswers.includes(answer)) {
      incorrectAnswers.push(answer);
    }
  }

  const answers: Answer[] = await Promise.all([
    prisma.answer.create({
      data: {
        answerText: correctAnswer,
        isCorrect: true,
        question: { connect: { id: questionId } }
      }
    }),
    ...incorrectAnswers.map(async (answer) => {
      const createdAnswer = await prisma.answer.create({
        data: { answerText: answer, isCorrect: false, question: { connect: { id: questionId } } }
      });
      return createdAnswer;
    })
  ]);
  return answers;
};

const generateQuestions = async (): Promise<void> => {
  try {
    for (let i = 0; i < 50; i++) {
      const quizTitle: string = quizTitles[Math.floor(Math.random() * quizTitles.length)];
      const questionText: string = `What is ${generateRandomWord()} in ${quizTitle}?`;

      const quiz = await prisma.quiz.findFirst({
        where: { title: quizTitle }
      });

      const quizId = quiz?.id ?? (await prisma.quiz.create({ data: { title: quizTitle } })).id;

      const question: Question = await prisma.question.create({
        data: {
          quiz: {
            connect: { id: quizId }
          },
          questionText
        }
      });

      const answers: Answer[] = await generateRandomAnswers(generateRandomWord(), question.id);
      await prisma.answer.createMany({ data: answers, skipDuplicates: true });
    }

    console.log('Questions created successfully');
  } catch (error) {
    console.error('Error creating questions:', error);
  } finally {
    await prisma.$disconnect();
  }
};

generateQuestions();
