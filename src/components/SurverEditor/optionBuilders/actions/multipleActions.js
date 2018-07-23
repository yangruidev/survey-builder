//@flow
import type { ChoiceType } from '../../models/schema';

const UPDATE_CHOICE = 'UPDATE_CHOICE';
const ADD_NEW_CHOICE = 'ADD_NEW_CHOICE';

const updateChoice = (choice: ChoiceType) => {
  return {
    type: UPDATE_CHOICE,
    payload: choice
  };
};

const addNewChoice = () => {
  return {
    type: ADD_NEW_CHOICE,
    payload: null
  };
};

export { UPDATE_CHOICE, ADD_NEW_CHOICE, updateChoice, addNewChoice };
