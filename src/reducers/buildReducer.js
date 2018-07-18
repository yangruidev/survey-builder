//@flow
import uuidv4 from 'uuid';
import type { QuestionOptionsPair, ReduxAction } from '../Schema';
import { ADD_NEW_QUESTION } from '../actions/buildSurvey';

type State = {
  questions: QuestionOptionsPair[],
  currentQuestionId: number
};

const DEFAULT_STATE: State = {
  questions: [],
  currentQuestionId: 0
};

const buildReducer = (state: State, action: ReduxAction) => {
  if (!state) {
    state = DEFAULT_STATE;
  }
  let questionList: QuestionOptionsPair[] =
    state && state.questions && state.questions.length > 0
      ? state.questions.slice()
      : [];

  switch (action.type) {
    case ADD_NEW_QUESTION:
      const newBlankQuestion: QuestionOptionsPair = {
        id: uuidv4(),
        text: '',
        type: 'Multiple Choice',
        dirty: false,
        options: null
      };
      questionList.push(newBlankQuestion);
      return { ...state, questions: questionList };
    default:
      return { ...state };
  }
};

export default buildReducer;
