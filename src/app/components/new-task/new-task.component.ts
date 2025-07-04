import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) selectedUserId!: string;

  @Output() close = new EventEmitter<void>();

  private taskService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancelAddingTask() {
    this.close.emit();
  }

  onSubmitTask() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate,
      },
      this.selectedUserId
    );
    this.close.emit();
  }
}
