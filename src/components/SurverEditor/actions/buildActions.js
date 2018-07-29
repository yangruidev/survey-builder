//@flow
import { Action, State } from 'redux';
import type {
  QuestionType,
  ChoiceType,
  ComboType,
  GetStateType,
  DispatchType,
  ThunkActionType
} from '../models/schema';
import {
  INITIALIZE_NEW_COMBO,
  UPDATE_QUESTION,
  SAVE_COMBO,
  UPDATE_COMBO,
  EDIT_COMBO,
  DELETE_COMBO,
  UPDATE_CHOICE,
  INITIALIZE_NEW_CHOICE,
  REMOVE_CHOICE
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

const deleteCombo = (comboId: string) => {
  return {
    type: DELETE_COMBO,
    payload: { comboId }
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
  deleteCombo,
  invokeWithAllData
};
