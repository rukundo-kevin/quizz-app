import Joi from 'joi';

const submitScore = {
  body: Joi.object().keys({
    score: Joi.number().required(),
    quizId: Joi.number().required()
  })
};

export default {
  submitScore
};
