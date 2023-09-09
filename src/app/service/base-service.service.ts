import { Injectable } from '@angular/core';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

    students: Student[] = [
        {id:0, name: "Name1", surname:"Surname1"},
        {id:1, name: "Name2", surname:"Surname2"},
        {id:2, name: "Name3", surname:"Surname3"},
        {id:3, name: "Name4", surname:"Surname4"},
    ]
    constructor() { }

    getAllStudents() : Student[] {
        console.log("count of students " + this.students.length);
        return this.students;
    }

    addNewStudent(student: Student){
        console.log("push student");
        this.students.push(student);
    }
}
