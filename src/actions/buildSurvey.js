//@flow
import type { QuestionOptionsPair } from '../Schema';

const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

const addNewQuestion = () => {
  return {
    type: ADD_NEW_QUESTION,
    payload: null
  };
};

export { ADD_NEW_QUESTION, addNewQuestion };
