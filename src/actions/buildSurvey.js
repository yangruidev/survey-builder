//@flow
import type { QuestionType } from '../models/Schema';

const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
const UPDATE_QUESTION = 'UPDATE_QUESTION';

const addNewQuestion = () => {
  return {
    type: ADD_NEW_QUESTION,
    payload: null
  };
};

const updateQuestion = (question: QuestionType) => {
  return {
    type: UPDATE_QUESTION,
    payload: question
  };
};

export { ADD_NEW_QUESTION, UPDATE_QUESTION, addNewQuestion, updateQuestion };
