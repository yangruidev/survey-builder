//@flow
import { Action, ThunkAction, PromiseAction, State } from 'redux';

export type ComboType = {
  id: string,
  type: string,
  question: QuestionType,
  options: OptionsType
};

export type LogicGroupType = {
  rules: Array<LogicType>
};

export type LogicCondition = 'is' | 'not';
export type LogicAction = 'skipTo';

export type LogicType = {
  id: string,
  type: string,
  condition: LogicCondition,
  resultAction: LogicAction,
  resultTarget: number
};

export type ReduxAction = {
  type: String,
  payload: Object
};

export type OptionsType = {
  id: string,
  type: string,
  value: ?Array<Object>
};

export type QuestionType = {
  id: string,
  text: string
};

export type ChoiceType = {
  id: string,
  text: string
};

export type MoveType = {
  page: number,
  position: string,
  selectedComboId: string
};

export type DispatchType = (
  action: Action | ThunkAction | PromiseAction
) => any;
export type GetStateType = () => State;
export type ThunkActionType = (
  dispatch: DispatchType,
  getState: GetStateType
) => any;
