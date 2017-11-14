import {Component} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public todoService: TodoService) {}
}
