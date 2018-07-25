//@flow
import { Action, State } from 'redux';
import type {
  QuestionType,
  ComboType,
  GetStateType,
  DispatchType,
  ThunkActionType
} from './models/schema';
import {
  INITIALIZE_NEW_COMBO,
  UPDATE_QUESTION,
  SAVE_COMBO,
  UPDATE_COMBO,
  EDIT_COMBO,
  DELETE_COMBO
} from './models/constant';

const initializeNewCombo = (all: State) => {
  return {
    type: INITIALIZE_NEW_COMBO,
    payload: { all }
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
  invokeWithAllData,
  updateQuestion,
  saveCombo,
  updateCombo,
  editCombo,
  deleteCombo
};
