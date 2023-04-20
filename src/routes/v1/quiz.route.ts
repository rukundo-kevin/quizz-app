import express from 'express';
import validate from '../../middlewares/validate';
import { authController, quizController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/', quizController.createQuiz);
router.get('/', auth(), quizController.getQuizCategories);
router.get('/category', auth(), quizController.getQuizCategories);
router.get('/category/{id}/quizzez', auth(), quizController.getQuizCategoryQuestions);

export default router;
/**
 * @swagger
 * tags:
 *   name: Quizzez
 *   description: Retrieve all quiz categories in the database
 */

/**
 * @swagger
 * /quiz/category:
 *   get:
 *     summary: Retrieve all quiz categories
 *     description: Retrieve all quiz categories.
 *     tags: [Quizzez]
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

/**
 * @swagger
 * /quiz/category/{id}/quizzez:
 *   get:
 *     summary: Get all quastions in a category
 *     description:  Get all quastions in a category.
 *     tags: [Quizzez]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: Category id
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
