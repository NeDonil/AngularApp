import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/model/Student';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {
    students !: Student[]

    constructor(private baseService: BaseServiceService,
        public dialog: MatDialog){}

    ngOnInit(){
        console.log("TableStudentsComponent");
        this.baseService.getAllStudents().subscribe(data => this.students = data);
    }

    addNewStudent(){
        const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
            width: "400px",
            data: null
        });

        dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
            if(result != null){
            this.baseService.addNewStudent(result).subscribe(k =>
                this.baseService.getAllStudents().subscribe(data => this.students = data));
            }
        });
    }
}
