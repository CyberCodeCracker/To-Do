import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';

import { type Task } from './task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  @Output() newTask = new EventEmitter<string>();

  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.completeTask(this.task.id);
  }
}
