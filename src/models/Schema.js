//@flow
export type Question = {
  id: string,
  type: string,
  text: string,
  dirty: boolean
};

export type ReduxAction = {
  type: String,
  payload: Object
};
