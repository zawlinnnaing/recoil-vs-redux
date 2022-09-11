export type State = {
  count: number;
  textValue: string;
};

export type ReduxAction<T = any> = {
  type: string;
  payload: T;
};
