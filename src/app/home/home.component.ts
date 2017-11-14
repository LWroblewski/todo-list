import {Component} from '@angular/core';
import {TodoService} from '../core/components/services/todo.service';
import {Todo} from '../core/components/model/todo.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public todoService: TodoService) { }

  deleteTodo(pTodo: Todo) {}

  addTodo() {
    this.todoService.addTodo({
      title: 'La flemme de faire des inputs',
      message: 'Commentaire fixe'
    });
  }
}
