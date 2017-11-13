import {ChangeDetectionStrategy, Component, EventEmitter, OnInit} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {TodoService} from '../services/todo.service';
import {Todo} from '../model/todo.model';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
