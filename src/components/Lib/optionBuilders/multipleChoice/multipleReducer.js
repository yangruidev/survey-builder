//@flow
import uuidv4 from 'uuid';
import { updateItemInArray } from '../../../../utilities';
import type { ChoiceType, ReduxAction } from '../schema';
import { DefaultMultipleChoiceOptions } from '../config';
import {
  UPDATE_CHOICE,
  ADD_NEW_CHOICE,
  updateChoice,
  addNewChoice
} from '../actions/multipleActions';

type State = {
  choices: Array<ChoiceType>,
  currentChoiceId: string
};

const DEFAULT_STATE: State = {
  choices: DefaultMultipleChoiceOptions,
  currentChoiceId: ''
};

const multipleReducer = (state: State, action: ReduxAction) => {
  if (!state) {
    state = DEFAULT_STATE;
  }
  let choiceList: Array<ChoiceType> =
    state && state.choices && state.choices.length > 0
      ? state.choices.slice()
      : [];

  switch (action.type) {
    case ADD_NEW_CHOICE:
      const newBlankChoice: ChoiceType = {
        id: uuidv4(),
        text: ''
      };
      choiceList.push(newBlankChoice);
      return { ...state, choices: choiceList };

    case UPDATE_CHOICE:
      const newList = updateItemInArray(choiceList, action.payload);
      return { ...state, choices: newList };

    default:
      return { ...state };
  }
};

export default multipleReducer;
