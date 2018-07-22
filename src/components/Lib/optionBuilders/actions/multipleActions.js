//@flow
import type { ChoiceType } from '../Schema';

const UPDATE_CHOICE = 'UPDATE_CHOICE';
const ADD_NEW_CHOICE = 'ADD_NEW_CHOICE';

const updateChoice = (choice: ChoiceType) => {
  return {
    type: UPDATE_CHOICE,
    payload: choice
  };
};

const addNewChoice = (choice: ChoiceType) => {
  return {
    type: ADD_NEW_CHOICE,
    payload: choice
  };
};

export { UPDATE_CHOICE, ADD_NEW_CHOICE, updateChoice, addNewChoice };
