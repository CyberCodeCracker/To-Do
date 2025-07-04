import { Component, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  @Input({ required: true }) userName!: string;
  isAddingNewTask = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getSelectedUserTasks(this.selectedUserId);
  }

  onStartAddingTask() {
    this.isAddingNewTask = true;
  }

  onCancelAddingTask() {
    this.isAddingNewTask = false;
  }
}
