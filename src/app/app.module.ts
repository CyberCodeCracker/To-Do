import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent } from './components/task/task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { CardComponent } from './shared/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    UserComponent,
    TaskComponent,
    NewTaskComponent,
    CardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
