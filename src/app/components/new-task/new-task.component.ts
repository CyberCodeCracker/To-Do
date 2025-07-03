import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) text!: string;

  @Output() cancelAddingTask = new EventEmitter<void>();

  onCancelAddingTask() {
    this.cancelAddingTask.emit();
  }
}
