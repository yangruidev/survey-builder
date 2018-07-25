//@flow
import uuidv4 from 'uuid';
import type { QuestionType, ComboType, ReduxAction } from './models/schema';
import { QuestionTypes as questionTypes } from './models/config';
import {
  INITIALIZE_NEW_COMBO,
  UPDATE_QUESTION,
  SAVE_COMBO,
  UPDATE_COMBO,
  EDIT_COMBO,
  DELETE_COMBO
} from '../SurverEditor/models/constant';
import {
  insertItem,
  removeItemById,
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
  let combo = null,
    comboId = null,
    question = null;
  if (action.payload) {
    combo = action.payload.combo;
    comboId = action.payload.comboId;
    question = action.payload.question;
  }

  switch (action.type) {
    case INITIALIZE_NEW_COMBO:
      const { all } = action.payload;
      const { choices } = all.optionsReducer;
      //when initialize new, if there's combo in EDIT state, save the
      //combo as it is and make the new initlaized combo current
      newComboList = saveOptionsToCurrentCombo(
        comboList,
        state.currentComboId,
        choices
      );
      const newCombo: ComboType = initializeCombo();
      newComboList.push(newCombo);
      return { ...state, combos: newComboList, currentComboId: newCombo.id };

    case UPDATE_QUESTION:
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
      newComboList = createOrUpdateItemInArray(comboList, combo);
      return { ...state, combos: newComboList, currentComboId: '' };

    case EDIT_COMBO:
      return { ...state, currentComboId: comboId };

    case DELETE_COMBO:
      newComboList = removeItemById(comboList, comboId);
      return { ...state, combos: newComboList };

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
      value: null //defer initialization to specific type option builder
    }
  };
};

const updateToAlignWithComboType = combo => {
  const q = { ...combo.question, type: combo.type };
  const o = { ...combo.options, type: combo.type };
  const c = { ...combo, question: q, options: o };
  return c;
};

const saveOptionsToCurrentCombo = (comboList, currentComboId, options) => {
  return (comboList: any).map(c => {
    if (c.id == currentComboId) {
      return { ...c, options: { ...c.options, value: options } };
    } else {
      return c;
    }
  });
};

export default buildReducer;
