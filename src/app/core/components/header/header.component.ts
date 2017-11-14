import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoState} from '../stores/todo.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(public todoState: TodoState) {}
}
