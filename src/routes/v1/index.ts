import express from 'express';
import validate from '../../middlewares/validate';
import authValidation from '../../validations/auth.validation';
import { authController } from '../../controllers';

const router = express.Router();

router.post('/register', validate(authValidation.register), authController.register);

export default router;
