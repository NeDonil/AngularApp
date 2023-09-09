import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { StudentEditorComponent } from './components/student-editor/student-editor.component';
import { TableStudentsComponent } from './components/table-students/table-students.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentEditorComponent,
    TableStudentsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
