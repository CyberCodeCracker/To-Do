import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { type NewTask } from '../new-task/new-task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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
