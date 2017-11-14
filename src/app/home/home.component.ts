import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoState} from '../core/components/stores/todo.store';
import {Todo} from '../core/components/model/todo.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor(public todoState: TodoState) { }

  deleteTodo(pTodo: Todo) {
    this.todoState.deleteTodo(pTodo.id);
  }

  addTodo() {
    this.todoState.addTodo({
      id: new Date().toString(),
      title: 'La flemme de faire des inputs',
      message: 'Commentaire fixe'
    });
  }
}
