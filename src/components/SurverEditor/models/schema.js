//@flow
export type ComboType = {
  id: string,
  question: QuestionType,
  options: OptionsType
};

export type ReduxAction = {
  type: String,
  payload: Object
};

export type OptionsType = {
  type: string,
  optionsObject: ?Object
};

export type QuestionType = {
  type: string,
  text: string,
  dirty: boolean
};

export type ChoiceType = {
  id: string,
  text: string
};
