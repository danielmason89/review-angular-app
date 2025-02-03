import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksModule } from './tasks/tasks.module';
//import { TasksComponent } from './tasks/tasks.component';
//import { CardComponent } from './shared/card/card.component';
//import { TaskComponent } from './tasks/task/task.component';
//import { NewTaskComponent } from './tasks/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    //CardComponent,
    // TasksComponent,
    // TaskComponent,
    // NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  // BrowserModule automatically includes DatePipe, and other module when using it.
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
//its helpful to be aware of module-based approach in angular though in modern implementations it is not typically used.
