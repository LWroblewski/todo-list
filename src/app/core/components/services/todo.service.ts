import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Todo} from "../model/todo.model";
import {environment} from "../../../../environments/environment";

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.urlTodos);
  }
}
