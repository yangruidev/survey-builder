//@flow
export type QuestionOptionsPair = {
  id: string,
  type: string,
  text: string,
  options: ?Object,
  dirty: boolean
};

export type ReduxAction = {
  type: String,
  payload: Object
};
