//@flow
import uuidv4 from 'uuid';
import type { Question, ReduxAction } from '../models/Schema';
import { QuestionTypes as questionTypes } from '../models/Config';
import { ADD_NEW_QUESTION } from '../actions/buildSurvey';

type State = {
  questions: Array<Question>,
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
  let questionList: Array<Question> =
    state && state.questions && state.questions.length > 0
      ? state.questions.slice()
      : [];

  switch (action.type) {
    case ADD_NEW_QUESTION:
      const newBlankQuestion: Question = {
        id: uuidv4(),
        text: '',
        type: questionTypes[0].value,
        dirty: false
      };
      questionList.push(newBlankQuestion);
      return { ...state, questions: questionList };
    default:
      return { ...state };
  }
};

export default buildReducer;
