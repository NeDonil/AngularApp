import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-dialog-edit-wrapper',
  templateUrl: './dialog-edit-wrapper.component.html',
  styleUrls: ['./dialog-edit-wrapper.component.css'],
})
export class DialogEditWrapperComponent {
    editingStudent!: Student;
    constructor(public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Student){
            if(data != null){
                this.editingStudent = data;
            }
        }

    ngOnInit(){
        this.editingStudent = new Student();
    }
    onNoClick(): void {
        this.dialogRef.close(false);
    }
}
