//@flow
import uuidv4 from 'uuid';
import type { QuestionType, ComboType, ReduxAction } from '../models/schema';
import { QuestionTypes, ChoiceType } from '../models/config';
import {
  FETCH_COMBO_STARTED,
  FETCH_COMBO_SUCCESS,
  FETCH_COMBO_FAILURE,
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
  DISCARD_CHANGE,
  SAVE_COMBO_MOVE,
  MULTIPLE_CHOICE
} from '../models/constant';
import {
  insertItemToArray,
  removeItemById,
  updateItemPropInArray,
  updateItemInArray,
  createOrUpdateItemInArray,
  copyItemInArray,
  moveItemInArrayToBeforeOrAfterTargetItem
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
} from '../actions/buildActionHelper';

type State = {
  combos: Array<ComboType>,
  currentComboId: string,
  isComboModalOpen: boolean,
  currentModalComboId: string
};

const DEFAULT_STATE: State = {
  combos: [],
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
    case FETCH_COMBO_STARTED:
      return { ...state };

    case FETCH_COMBO_SUCCESS:
      return { ...state, combos: action.payload.combos };

    case FETCH_COMBO_FAILURE:
      return { ...state };

    case INITIALIZE_NEW_COMBO:
      const newCombo: ComboType = initializeCombo(QuestionTypes[0].value);
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
      newComboList = comboList;
      if (currentCombo) {
        newComboList = updateChoiceInCurrentCombo(
          comboList,
          currentCombo,
          action.payload.choice
        );
      }
      return { ...state, combos: newComboList };

    case REMOVE_CHOICE:
      newComboList = comboList;
      if (currentCombo && comboList) {
        newComboList = removeChoiceFromCurrentCombo(
          comboList,
          currentCombo,
          action.payload.choiceId
        );
      }
      return { ...state, combos: newComboList };

    case UPDATE_COMBO:
      const { propValue, propName } = action.payload;
      newComboList = updateItemPropInArray(
        comboList,
        state.currentComboId,
        propName,
        propValue
      ).map(c => {
        if (c.id === state.currentComboId) {
          return updateToAlignWithComboType(c);
        }
        return c;
      });
      return { ...state, combos: newComboList };

    case SAVE_COMBO_MOVE:
      const { selectedComboId, page, position } = action.payload;
      const { currentModalComboId } = state;
      newComboList = moveItemInArrayToBeforeOrAfterTargetItem(
        comboList,
        currentModalComboId,
        selectedComboId,
        position
      );

      return {
        ...state,
        currentModalComboId: null,
        isComboModalOpen: false,
        combos: newComboList
      };

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
