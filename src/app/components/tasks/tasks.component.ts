import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({ required: true }) userName!: string;

  tasks = [
    {
      id: 't1',
      title: 'Angular Dummy Task',
      summary: 'Learn all the basic and advanced concepts of Angular',
      dueDate: "14/07/2025",
      userId: 'u1'
    }
  ]
}
