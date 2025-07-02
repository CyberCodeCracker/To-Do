import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [HeaderComponent, UserComponent, TasksComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(userId: string) {
    this.selectedUserId = userId;
  } 

  get selectedUserName() {
    return DUMMY_USERS.find(user => user.id === this.selectedUserId)?.name || '';
  }
}
