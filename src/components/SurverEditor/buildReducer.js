//@flow
import uuidv4 from 'uuid';
import type { QuestionType, ComboType, ReduxAction } from './models/schema';
import { QuestionTypes as questionTypes } from './models/config';
import {
  CREATE_NEW_COMBO,
  UPDATE_QUESTION,
  SAVE_COMBO,
  UPDATE_COMBO
} from '../SurverEditor/models/constant';
import {
  insertItem,
  removeItem,
  updateItemPropInArray,
  updateItemInArray,
  createOrUpdateItemInArray
} from '../../utilities';

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
  let comboList: Array<ComboType> = state.combos ? state.combos.slice() : [];
  let newComboList = []; //used for hold updated combolist

  switch (action.type) {
    case CREATE_NEW_COMBO:
      const newCombo: ComboType = initializeCombo();
      comboList.push(newCombo);
      return { ...state, combos: comboList, currentComboId: newCombo.id };

    case UPDATE_QUESTION:
      const { comboId, question } = action.payload;
      newComboList = updateItemPropInArray(
        comboList,
        comboId,
        'question',
        question
      );
      return { ...state, combos: newComboList };

    case UPDATE_COMBO:
      const { propValue, propName } = action.payload;
      newComboList = updateItemPropInArray(
        comboList,
        action.payload.comboId,
        propName,
        propValue
      ).map(c => updateToAlignWithComboType(c));
      return { ...state, combos: newComboList };

    case SAVE_COMBO:
      const { combo } = action.payload;
      newComboList = createOrUpdateItemInArray(comboList, combo);
      console.log(newComboList);
      return { ...state, combos: newComboList, currentComboId: '' };

    default:
      return { ...state };
  }
};

const initializeQuestion = type => {
  return {
    text: '',
    type: type || questionTypes[0].value,
    dirty: false
  };
};

const initializeCombo = (type = questionTypes[0].value) => {
  return {
    id: uuidv4(),
    question: initializeQuestion(type),
    type: type,
    options: {
      type: type,
      optionsObject: null //defer initialization to specific type option builder
    }
  };
};

const updateToAlignWithComboType = combo => {
  const q = { ...combo.question, type: combo.type };
  const o = { ...combo.options, type: combo.type };
  const c = { ...combo, question: q, options: o };
  return c;
};

export default buildReducer;
