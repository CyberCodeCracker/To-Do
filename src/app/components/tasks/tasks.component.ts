import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { type NewTask } from '../new-task/new-task.model';
import { TasksService } from './tasks.service';

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

  onCompleteTask(taskId: string) {
    this.taskService.completeTask(taskId);
  }

  onStartAddingTask() {
    this.isAddingNewTask = true;
  }

  onCancelAddingTask() {
    this.isAddingNewTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.taskService.addTask(taskData, this.selectedUserId);
    this.isAddingNewTask = false;
  }
}

