import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../model/todo.model';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {

  private _todo: Todo[];

  private set todo(value: Todo[]) {
    this._todo = value;
    this._todoSubject.next(this._todo);
  }

  private _todoSubject: BehaviorSubject<Todo[]>;

  public get todos$(): Observable<Todo[]> {
    return this._todoSubject.asObservable();
  }

  constructor(private http: HttpClient) {
    this._todoSubject  = new BehaviorSubject(null);
    this.loadTodos();
  }

  private loadTodos() {
    this.http.get<Todo[]>(environment.urlTodos).subscribe(todo => this.todo = todo);
  }

  public addTodo(pTodo: Todo) {
    this.todo = [
      ...this._todo,
      pTodo
    ];
  }
}
