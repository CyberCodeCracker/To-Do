import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {

  @Output() cancelAddingTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancelAddingTask() {
    this.cancelAddingTask.emit();
  }

  onSubmitTask() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    });
  }
}
