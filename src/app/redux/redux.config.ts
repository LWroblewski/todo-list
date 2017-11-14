import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ActionReducer, ActionReducerMap} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {Todo} from '../core/components/model/todo.model';
import * as Todos from '../todos/todos.reducer';
import {environment} from '../../environments/environment';

export interface State {
  todos: Todo[];
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<any> = {
  todo: Todos.reducer
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any, any> {
  return localStorageSync({
    keys: ['todos'],
    rehydrate: environment.rehydrate,
    storage: environment.storage
  })(reducer);
}

export const metaReducers = [localStorageSyncReducer];
