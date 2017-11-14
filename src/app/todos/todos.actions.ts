import {Action} from '@ngrx/store';
import {Todo} from '../core/components/model/todo.model';

export const LOAD_ACTION = '[Todo] LOAD';
export const LOAD_SUCCESS_ACTION = '[Todo] LOAD_SUCCESS';
export const LOAD_ERROR_ACTION = '[Todo] LOAD_ERROR';
export const ADD_ACTION = '[Todo] ADD';
export const DELETE_ACTION = '[Todo] DELETE';

export class TodosLoadAction implements Action {
  readonly type = LOAD_ACTION;

  constructor() {}
}

export class TodosLoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS_ACTION;

  constructor(readonly payload: Todo[]) {}
}

export class TodosLoadErrorAction implements Action {
  readonly type = LOAD_ERROR_ACTION;

  constructor(readonly payload: Error) {}
}

export class TodoAddAction implements Action {
  readonly type = ADD_ACTION;

  constructor(readonly payload: Todo) {}
}

export class TodoDeleteAction implements Action {
  readonly type = DELETE_ACTION;

  constructor(readonly payload: string) {}
}

export type Actions =
  | TodosLoadAction
  | TodosLoadSuccessAction
  | TodosLoadErrorAction
  | TodoAddAction
  | TodoDeleteAction;
