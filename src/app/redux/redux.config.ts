import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {Todo} from '../core/components/model/todo.model';
import * as Todos from '../todos/todos.reducer';

export interface State {
  todos: Todo[];
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  todos: Todos.reducer,
  router: routerReducer
};
