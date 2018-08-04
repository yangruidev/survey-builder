//@flow
import { Action, State } from 'redux';
import type {
  QuestionType,
  ChoiceType,
  ComboType,
  MoveType,
  GetStateType,
  DispatchType,
  ThunkActionType
} from '../models/schema';
import {
  INITIALIZE_NEW_COMBO,
  UPDATE_QUESTION,
  SAVE_COMBO,
  UPDATE_COMBO,
  COPY_COMBO,
  EDIT_COMBO,
  DELETE_COMBO,
  SAVE_COMBO_MOVE,
  LAUNCH_COMBO_MODAL,
  CLOSE_COMBO_MODAL,
  UPDATE_CHOICE,
  INITIALIZE_NEW_CHOICE,
  REMOVE_CHOICE,
  DISCARD_CHANGE
} from '../models/constant';

const initializeNewCombo = (all: State) => {
  return {
    type: INITIALIZE_NEW_COMBO,
    payload: { all }
  };
};

const initializeNewChoice = () => {
  return {
    type: INITIALIZE_NEW_CHOICE,
    payload: {}
  };
};

const initializeNewChoiceUnder = (id: string) => {
  return {
    type: INITIALIZE_NEW_CHOICE,
    payload: { id }
  };
};

const removeChoice = (choiceId: string) => {
  return {
    type: REMOVE_CHOICE,
    payload: { choiceId }
  };
};

const updateQuestion = (question: QuestionType) => {
  return updateCombo('question', question);
};

const updateChoice = (choice: ChoiceType) => {
  return {
    type: UPDATE_CHOICE,
    payload: { choice }
  };
};

const updateCombo = (propName: string, propValue: Object) => {
  return {
    type: UPDATE_COMBO,
    payload: {
      propName,
      propValue
    }
  };
};

const editCombo = (comboId: string) => {
  return {
    type: EDIT_COMBO,
    payload: { comboId }
  };
};

const copyCombo = (comboId: string) => {
  return {
    type: COPY_COMBO,
    payload: { comboId }
  };
};

const deleteCombo = (comboId: string) => {
  return {
    type: DELETE_COMBO,
    payload: { comboId }
  };
};

const saveCombo = () => {
  return {
    type: SAVE_COMBO,
    payload: {}
  };
};

const saveComboMove = (move: MoveType) => {
  return {
    type: SAVE_COMBO_MOVE,
    payload: move
  };
};

const launchComboModal = (comboId: string) => {
  return {
    type: LAUNCH_COMBO_MODAL,
    payload: {
      comboId
    }
  };
};

const closeComboModal = () => {
  return {
    type: CLOSE_COMBO_MODAL,
    payload: {}
  };
};

const discardChange = () => {
  return {
    type: DISCARD_CHANGE,
    payload: {}
  };
};

//Thunk utility, ONLY use when the function needs all data from root state tree
//TODO: What if need other arguments other than all???
const invokeWithAllData = (callback: (all: State) => Action) => {
  return (dispatch: DispatchType, getState: GetStateType) => {
    const all = getState();
    return dispatch(callback(all));
  };
};

export {
  initializeNewCombo,
  initializeNewChoiceUnder,
  updateQuestion,
  updateChoice,
  removeChoice,
  updateCombo,
  editCombo,
  copyCombo,
  deleteCombo,
  saveCombo,
  saveComboMove,
  launchComboModal,
  closeComboModal,
  discardChange,
  invokeWithAllData
};
