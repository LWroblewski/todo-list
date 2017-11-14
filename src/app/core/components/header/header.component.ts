import {ChangeDetectionStrategy, Component, EventEmitter, OnInit} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {TodoService} from '../services/todo.service';
import {Todo} from '../model/todo.model';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {State} from "../../../redux/redux.config";
import {getTodos} from "../../../todos/todos.reducer";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(getTodos);
  }
}
