import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../model/todo.model';
import {environment} from '../../../../environments/environment';
import {action, autorun, computed, observable, toJS} from 'mobx';

@Injectable()
export class TodoState {

  @observable
  todos: Todo[];

  constructor(private http: HttpClient) {
    if (localStorage.savedTodos) {
      // this.todos = JSON.parse(localStorage.savedTodos);
      this.loadTodos().subscribe(todos => this.todos = todos);
    } else {
      this.loadTodos().subscribe(todos => this.todos = todos);
    }
    autorun(() => {
      localStorage.savedTodos = JSON.stringify(toJS(this.todos));
    });
  }

  private loadTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.urlTodos);
  }

  @computed
  get numTodos(): number {
    return this.todos ? this.todos.length : 0;
  }

  @action
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  @action
  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
