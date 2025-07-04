import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
