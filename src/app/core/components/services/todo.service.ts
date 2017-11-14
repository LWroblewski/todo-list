import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../model/todo.model';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {

  private _navigate: BehaviorSubject<Navigate>;

  public get navigate(): BehaviorSubject<Navigate> {
    return this._navigate;
  }

  constructor(private http: HttpClient) {
    this.todoSubject  = new BehaviorSubject();
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.urlTodos);
  }
}
