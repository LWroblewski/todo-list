import {Component, OnInit} from '@angular/core';
import {TodoService} from '../core/components/services/todo.service';
import {Todo} from '../core/components/model/todo.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteTodo(pTodo: Todo) {
    this.todos = this.todos.filter(todo => pTodo !== todo);
  }

  addTodo() {
    this.todos.push({
      title: 'La flemme de faire des inputs',
      message: 'Commentaire fixe'
    });
  }
}
