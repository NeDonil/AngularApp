import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {
    students !: Student[]

    constructor(){}

    ngOnInit(){
        this.students = [
            {id : 0, name :"Dima", surname : "NeDima"},
            {id : 1, name :"Donil", surname : "NeDonil"},
            {id : 2, name :"Alex", surname : "NeAlex"},
        ]
    }
}
