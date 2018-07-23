//@flow
import type { QuestionType, ComboType } from './models/schema';
import {
  CREATE_NEW_COMBO,
  UPDATE_QUESTION,
  SAVE_COMBO,
  UPDATE_COMBO
} from './models/constant';

const addNewQuestion = () => {
  return {
    type: CREATE_NEW_COMBO,
    payload: null
  };
};

const updateQuestion = (comboId: string, question: QuestionType) => {
  return {
    type: UPDATE_QUESTION,
    payload: { comboId, question }
  };
};

const updateCombo = (comboId: string, propName: string, propValue: string) => {
  return {
    type: UPDATE_COMBO,
    payload: {
      comboId,
      propName,
      propValue
    }
  };
};

const saveCombo = (combo: ComboType) => {
  return {
    type: SAVE_COMBO,
    payload: { combo }
  };
};

export { addNewQuestion, updateQuestion, saveCombo, updateCombo };
