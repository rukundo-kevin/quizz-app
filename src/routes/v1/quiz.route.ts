import express from 'express';
import validate from '../../middlewares/validate';
import { quizController } from '../../controllers';
import auth from '../../middlewares/auth';
import { quizValidation } from '../../validations';

const router = express.Router();

router.post('/', auth(), validate(quizValidation.submitScore), quizController.createUserQuiz);
router.get('/', auth(), quizController.getQuizCategories);
router.get('/category', auth(), quizController.getQuizCategories);
router.get('/category/:id/quizzez', auth(), quizController.getQuizCategoryQuestions);
router.get('/score', auth(), quizController.getUserQuizScore);
export default router;
/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Retrieve all quiz categories in the database
 */

/**
 * @swagger
 * /quiz:
 *   post:
 *     summary: Add new user quiz scores
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - score
 *               - quizId
 *             properties:
 *               score:
 *                 numericValue:
 *                   type: number
 *               quizId:
 *                 numericValue:
 *                   type: number
 *                 description: Id of the Quiz that the user attempted
 *             example:
 *               score: 20
 *               quizId: 2
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Quiz:
 *                   $ref: '#/components/schemas/UserQuiz'
 *       "400":
 *         $ref: '#/components/responses/ValidationError'
 */

/**
 * @swagger
 * /quiz/category/{id}/quizzez:
 *   get:
 *     summary: Get all quastions in a category
 *     description:  Get all quastions in a category.
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: Category Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Quiz'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /quiz/category:
 *   get:
 *     summary: Retrieve all quiz categories
 *     description: Retrieve all quiz categories.
 *     tags: [Quiz]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Quiz'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
