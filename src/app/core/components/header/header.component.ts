import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo.model';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State} from '../../../redux/redux.config';
import {selectAllTodos} from '../../../todos/todos.reducer';

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
    this.todos$ = this.store.select(selectAllTodos);
  }
}
