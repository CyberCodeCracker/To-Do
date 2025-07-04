import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
