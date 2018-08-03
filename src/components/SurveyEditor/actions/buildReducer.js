//@flow
import uuidv4 from 'uuid';
import { loadComboList } from '../../../seed';
import type { QuestionType, ComboType, ReduxAction } from '../models/schema';
import { QuestionTypes as questionTypes, ChoiceType } from '../models/config';
import {
  INITIALIZE_NEW_COMBO,
  UPDATE_QUESTION,
  SAVE_COMBO,
  UPDATE_COMBO,
  EDIT_COMBO,
  DELETE_COMBO,
  COPY_COMBO,
  MOVE_COMBO,
  LAUNCH_COMBO_MODAL,
  CLOSE_COMBO_MODAL,
  INITIALIZE_NEW_CHOICE,
  UPDATE_CHOICE,
  REMOVE_CHOICE,
  DISCARD_CHANGE
} from '../../SurveyEditor/models/constant';
import {
  insertItemToArray,
  removeItemById,
  updateItemPropInArray,
  updateItemInArray,
  createOrUpdateItemInArray,
  copyItemInArray
} from '../../../utilities';
import {
  initializeQuestion,
  initializeChoice,
  initializeCombo,
  initializeChoiceInCurrentCombo,
  updateToAlignWithComboType,
  updateChoiceInCurrentCombo,
  saveOptionsToCurrentCombo,
  removeChoiceFromCurrentCombo
} from './ActionHelper';

type State = {
  combos: Array<ComboType>,
  currentComboId: string
};

const DEFAULT_STATE: State = {
  combos: loadComboList(),
  currentComboId: '',
  isComboModalOpen: false,
  currentModalComboId: ''
};

const buildReducer = (state: State, action: ReduxAction) => {
  if (!state) {
    state = DEFAULT_STATE;
  }
  let comboList: Array<ComboType> = state.combos ? state.combos.slice() : [];
  let newComboList = []; //used for hold updated combolist
  let currentCombo = null,
    combo = null,
    comboId = null,
    question = null;

  if (state.currentComboId) {
    currentCombo = state.combos.filter(c => c.id == state.currentComboId)[0];
  }

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
      if (currentCombo != null) {
        newComboList = initializeChoiceInCurrentCombo(
          comboList,
          currentCombo,
          action.payload.id ? action.payload.id : null
        );
        return { ...state, combos: newComboList };
      }
      throw new Error('Cannot add new choice when currentCombo is not chosen.');

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
      //TODO: Implement SAVE_COMBO
      return { ...state, currentComboId: null };

    case EDIT_COMBO:
      return { ...state, currentComboId: comboId };

    case COPY_COMBO:
      newComboList = copyItemInArray(comboList, comboId);
      return { ...state, combos: newComboList };

    case DELETE_COMBO:
      newComboList = removeItemById(comboList, comboId);
      return { ...state, combos: newComboList };

    case LAUNCH_COMBO_MODAL:
      return {
        ...state,
        isComboModalOpen: true,
        currentModalComboId: action.payload.comboId
      };

    case CLOSE_COMBO_MODAL:
      return {
        ...state,
        isComboModalOpen: false,
        currentModalComboId: ''
      };

    case DISCARD_CHANGE:
      return { ...state, currentComboId: null };

    default:
      return { ...state };
  }
};

export default buildReducer;
