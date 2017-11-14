import {Component, OnInit} from '@angular/core';
import {Todo} from '../core/components/model/todo.model';
import {Store} from '@ngrx/store';
import {State} from '../redux/redux.config';
import {Observable} from 'rxjs/Observable';
import {TodoAddAction, TodoDeleteAction} from '../todos/todos.actions';
import {selectAllTodos} from '../todos/todos.reducer';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.todos$ = this.store.select(selectAllTodos);
  }

  deleteTodo(pTodo: Todo) {
    this.store.dispatch(new TodoDeleteAction(pTodo.id));
  }

  addTodo() {
    this.store.dispatch(new TodoAddAction({
      id: new Date().toString(),
      title: 'La flemme de faire des inputs',
      message: 'Commentaire fixe'
    }));
  }
}
