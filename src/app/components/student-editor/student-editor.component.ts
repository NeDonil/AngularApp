import { Component } from '@angular/core';

@Component({
    selector: 'app-student-editor',
    templateUrl: './student-editor.component.html',
    styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent {
    name!: string
    surname!: string
}
