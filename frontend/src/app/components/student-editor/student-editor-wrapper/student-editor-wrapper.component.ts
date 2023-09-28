import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-student-editor-wrapper',
  templateUrl: './student-editor-wrapper.component.html',
  styleUrls: ['./student-editor-wrapper.component.css'],
})
export class StudentEditorWrapperComponent {
    editingStudent!: Student;
    constructor(public dialogRef: MatDialogRef<StudentEditorWrapperComponent>, @Inject(MAT_DIALOG_DATA) public data: Student){
        if(data != null){
            this.editingStudent = data;
        }
    }
    
    onSaveClick(): void {
        
    }
    
    onNoClick(): void {
        this.dialogRef.close(false);
    }
}
