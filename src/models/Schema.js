//@flow
export type ComboType = {
  question: QuestionType,
  options: OptionsType
};

export type ReduxAction = {
  type: String,
  payload: Object
};

export type OptionsType = {
  id: string,
  type: string,
  optionsObject: ?Object
};

export type QuestionType = {
  id: string,
  type: string,
  text: string,
  dirty: boolean
};
