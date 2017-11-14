import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import * as TodoActions from './todos.actions';
import {TodosLoadErrorAction, TodosLoadSuccessAction} from './todos.actions';
import {Action} from '@ngrx/store';
import {TodoService} from '../core/components/services/todo.service';
import {empty} from 'rxjs/observable/empty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TodosEffects {
  @Effect()
  getTodos$: Observable<Action> = this.actions$
    .ofType(TodoActions.LOAD_ACTION)
    .switchMap(() => this.todoService.getTodos())
    .map(todos => new TodosLoadSuccessAction(todos))
    .catch(error => of(new TodosLoadErrorAction(error)));

  @Effect()
  getTodosError$: Observable<Action> = this.actions$
    .ofType(TodoActions.LOAD_ERROR_ACTION)
    .map((action: TodosLoadErrorAction) => action.payload)
    .do(error => console.log(error))
    .flatMap(() => empty());

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}
