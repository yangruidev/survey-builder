const DEFAULT_STATE = {
  questions: [],
  currentQuestion: 0
};

const buildReducer = (state = DEFAULT_STATE, action) => {
  return { ...state };
};

export default buildReducer;
