//@flow
import { Action, ThunkAction, PromiseAction, State } from 'redux';

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
  value: ?Array<Object>
};

export type QuestionType = {
  type: string,
  text: string
};

export type ChoiceType = {
  id: string,
  text: string
};

export type DispatchType = (
  action: Action | ThunkAction | PromiseAction
) => any;
export type GetStateType = () => State;
export type ThunkActionType = (
  dispatch: DispatchType,
  getState: GetStateType
) => any;
