//@flow
import uuidv4 from 'uuid';
import type { QuestionType, ComboType, ReduxAction } from './models/schema';
import { QuestionTypes as questionTypes, ChoiceType } from './models/config';
import {
  INITIALIZE_NEW_COMBO,
  UPDATE_QUESTION,
  SAVE_COMBO,
  UPDATE_COMBO,
  EDIT_COMBO,
  DELETE_COMBO,
  INITIALIZE_NEW_CHOICE,
  UPDATE_CHOICE,
  REMOVE_CHOICE
} from '../SurverEditor/models/constant';
import {
  insertItem,
  removeItemById,
  updateItemPropInArray,
  updateItemInArray,
  createOrUpdateItemInArray
} from '../../utilities';
import ChoiceBuilder from './optionBuilders/multipleChoice/ChoiceBuilder';
import ChoiceList from './optionBuilders/multipleChoice/ChoiceList';

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
  let currentCombo = null;
  if (state.currentComboId) {
    currentCombo = state.combos.filter(c => c.id == state.currentComboId)[0];
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
      const newCombo: ComboType = initializeCombo();
      comboList.push(newCombo);
      return { ...state, combos: comboList, currentComboId: newCombo.id };

    case INITIALIZE_NEW_CHOICE:
      newComboList = initializeChoiceInCurrentCombo(comboList, currentCombo);
      return { ...state, combos: newComboList };

    case UPDATE_CHOICE:
      newComboList = updateChoiceInCurrentCombo(
        comboList,
        currentCombo,
        action.payload.choice
      );
      return { ...state, combos: newComboList };

    case REMOVE_CHOICE:
      newComboList = removeChoiceFromCurrentCombo(
        comboList,
        currentCombo,
        action.payload.choiceId
      );
      return { ...state, combos: newComboList };

    case UPDATE_COMBO:
      const { propValue, propName } = action.payload;
      newComboList = updateItemPropInArray(
        comboList,
        state.currentComboId,
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
      value: [initializeChoice(type)]
    }
  };
};

const initializeChoice = type => {
  switch (type) {
    case 'Multiple Choice':
      return {
        id: uuidv4(),
        text: ''
      };
    default:
      return {
        id: uuidv4(),
        text: ''
      };
  }
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

const initializeChoiceInCurrentCombo = (comboList, currentCombo) => {
  let newComboList = comboList;
  if (currentCombo && currentCombo.question) {
    const newChoice: ChoiceType = initializeChoice(currentCombo.question.type);
    newComboList = (comboList: any).map(c => {
      if (c.id === currentCombo.id) {
        if (c.options.value && c.options.value.length > 0) {
          const choliceList = c.options.value.slice();
          choliceList.push(newChoice);
          c.options = { ...c.options, value: choliceList };
        } else {
          c.options = { ...c.options, value: [newChoice] };
        }
      }
      return c;
    });
  }
  return newComboList;
};

const updateChoiceInCurrentCombo = (comboList, currentCombo, choice) => {
  let newComboList = comboList;
  if (currentCombo && currentCombo.question) {
    newComboList = (comboList: any).map(c => {
      if (
        c.id == currentCombo.id &&
        c.options.value &&
        c.options.value.length > 0
      ) {
        const choliceList = c.options.value.slice();
        c.options = {
          ...c.options,
          value: updateItemInArray(choliceList, choice)
        };
      }
      return c;
    });
  }
  return newComboList;
};

const removeChoiceFromCurrentCombo = (comboList, currentCombo, choiceId) => {
  let newComboList = comboList;
  if (currentCombo && currentCombo.question) {
    newComboList = (comboList: any).map(c => {
      if (
        c.id == currentCombo.id &&
        c.options.value &&
        c.options.value.length > 0
      ) {
        const choliceList = c.options.value.slice();
        c.options = {
          ...c.options,
          value: removeItemById(choliceList, choiceId)
        };
      }
      return c;
    });
  }
  return newComboList;
};

export default buildReducer;