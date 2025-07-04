import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";

import { TaskComponent } from "../task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "../new-task/new-task.component";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [TasksComponent]
})
export class TasksModule {

}