import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../redux/redux.config';
import {Observable} from 'rxjs/Observable';
import {getTodos} from '../../../todos/todos.reducer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import {TodosLoadAction} from '../../../todos/todos.actions';
import {Todo} from '../model/todo.model';
import {of} from 'rxjs/observable/of';

@Injectable()
export class TodoGuard implements CanActivate {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return this.loadTodos()
      .switchMap(() => of(true))
      .catch(() => of(false));
  }

  loadTodos(): Observable<any> {
    return this.store
      .select(getTodos)
      .do((todos: Todo[]) => {
        if (!todos || todos.length === 0) {
          this.store.dispatch(new TodosLoadAction());
        }
      })
      .filter((todos: Todo[]) => todos && todos.length > 0)
      .take(1);
  }
}
