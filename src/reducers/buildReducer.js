//@flow
import uuidv4 from 'uuid';
import type { QuestionType, ComboType, ReduxAction } from '../models/Schema';
import { QuestionTypes as questionTypes } from '../models/Config';
import { ADD_NEW_QUESTION, UPDATE_QUESTION } from '../actions/buildSurvey';
import { insertItem, removeItem, updateItemPropInArray } from '../utilities';

type State = {
  combos: Array<ComboType>,
  currentComboId: string
};

const DEFAULT_STATE: State = {
  combos: [],
  currentComboId: ''
};

const buildReducer = (state: State, action: ReduxAction) => {
  if (!state) {
    state = DEFAULT_STATE;
  }
  let comboList: Array<ComboType> =
    state && state.combos && state.combos.length > 0
      ? state.combos.slice()
      : [];

  switch (action.type) {
    case ADD_NEW_QUESTION:
      const newBlankQuestion: QuestionType = createQuestion();
      const newCombo: ComboType = {
        question: newBlankQuestion,
        options: {
          id: uuidv4(),
          type: newBlankQuestion.type,
          optionsObject: null
        }
      };
      comboList.push(newCombo);
      return { ...state, combos: comboList };

    case UPDATE_QUESTION:
      const { comboId, question } = action.payload;
      const newList = updateItemPropInArray(
        comboList,
        comboId,
        'question',
        question
      );
      return { ...state, combos: newList };

    default:
      return { ...state };
  }
};

const createQuestion = () => {
  return {
    id: uuidv4(),
    text: '',
    type: questionTypes[0].value,
    dirty: false
  };
};

export default buildReducer;
