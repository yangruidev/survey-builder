//@flow
import type { ChoiceType } from '../../models/schema';
import {
  UPDATE_CHOICE,
  ADD_NEW_CHOICE,
  REMOVE_CHOICE
} from '../../models/constant';

const updateChoice = (choice: ChoiceType) => {
  return {
    type: UPDATE_CHOICE,
    payload: choice
  };
};

const addNewChoice = () => {
  return {
    type: ADD_NEW_CHOICE,
    payload: {}
  };
};

const removeChoice = (id: string) => {
  return {
    type: REMOVE_CHOICE,
    payload: { id }
  };
};

export { updateChoice, addNewChoice, removeChoice };
