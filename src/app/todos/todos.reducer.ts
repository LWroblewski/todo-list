import {Todo} from '../core/components/model/todo.model';
import * as todoActions from './todos.actions';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';

export interface State extends EntityState<Todo> {}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = todoAdapter.getInitialState();

export function reducer(
  state = initialState,
  action: todoActions.Actions
) {
  switch (action.type) {
    case todoActions.LOAD_SUCCESS_ACTION:
      return todoAdapter.addAll(action.payload, state);
    case todoActions.ADD_ACTION:
      return todoAdapter.addOne(action.payload, state);
    case todoActions.DELETE_ACTION:
      return todoAdapter.removeOne(action.payload, state);
    // addOne, addMany, addAll, removeOne, removeMany, removeAll, updateOne and  updateMany
    default:
      return state;
  }
}

export const selectTodoState = createFeatureSelector<State>('todo');

export const { selectAll: selectAllTodos } = todoAdapter.getSelectors(selectTodoState);
