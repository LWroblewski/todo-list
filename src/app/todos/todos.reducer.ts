import {Todo} from '../core/components/model/todo.model';
import * as todoActions from './todos.actions';
import {State} from '../redux/redux.config';

export const initialState: Todo[] = [];

export function reducer(
  state: Todo[] = initialState,
  action: todoActions.Actions
): Todo[] {
  switch (action.type) {
    case todoActions.LOAD_SUCCESS_ACTION:
      return action.payload;
    case todoActions.ADD_ACTION:
      return [
        ...state,
        action.payload
      ];
    case todoActions.DELETE_ACTION:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export const getTodos = (state: State) => state.todos;
