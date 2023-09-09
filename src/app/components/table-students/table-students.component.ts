import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { BaseServiceService } from 'src/app/service/base-service.service';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {
    students !: Student[]

    constructor(private baseService: BaseServiceService){}

    ngOnInit(){
        console.log("TableStudentsComponent");
        this.students = this.baseService.getAllStudents();
    }
}
