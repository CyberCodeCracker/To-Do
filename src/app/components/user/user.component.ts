import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  @Input({ required: true }) user!: User;
  
  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }

}
