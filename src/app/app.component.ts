import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false, 
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
