//@flow
import uuidv4 from 'uuid';
import { updateItemInArray, removeItemById } from '../../../utilities';
import type { ChoiceType, ReduxAction } from '../models/schema';
import { DefaultMultipleChoiceOptions, QuestionTypes } from '../models/config';
import {
  UPDATE_CHOICE,
  ADD_NEW_CHOICE,
  REMOVE_CHOICE,
  INITIALIZE_NEW_COMBO
} from '../models/constant';
import {
  updateChoice,
  addNewChoice,
  removeChoice
} from './actions/multipleActions';

type State = {
  optionsType: string,
  choices: Array<ChoiceType>,
  currentChoiceId: string
};

const DEFAULT_STATE: State = {
  optionsType: QuestionTypes[0].value,
  choices: DefaultMultipleChoiceOptions,
  currentChoiceId: ''
};

const optionsReducer = (state: State, action: ReduxAction) => {
  if (!state) {
    state = DEFAULT_STATE;
  }
  let choiceList: Array<ChoiceType> =
    state && state.choices && state.choices.length > 0
      ? state.choices.slice()
      : [];
  let newList = [];

  switch (action.type) {
    case ADD_NEW_CHOICE:
      choiceList.push(createNewChoice());
      return { ...state, choices: choiceList };

    case UPDATE_CHOICE:
      newList = updateItemInArray(choiceList, action.payload);
      return { ...state, choices: newList };

    case REMOVE_CHOICE:
      newList = removeItemById(choiceList, action.payload.id);
      return { ...state, choices: newList };

    case INITIALIZE_NEW_COMBO:
      return { ...DEFAULT_STATE };

    default:
      return { ...state };
  }
};

function createNewChoice() {
  return {
    id: uuidv4(),
    text: ''
  };
}

export default optionsReducer;
