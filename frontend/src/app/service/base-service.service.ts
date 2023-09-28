import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

    private studentsUrl="api/base";

    constructor(private http: HttpClient) { }

    getAllStudents() : Observable<Student[]> {
        return this.http.get<Student[]>(this.studentsUrl);
    }

    addNewStudent(student: Student): Observable<Student>{
        console.log("AddNewStudent");
        return this.http.post<Student>(this.studentsUrl, student).pipe();
    }

    editStudent(student: Student): Observable<Student>{
        console.log("EditStudent " + student.id);
        return this.http.put<Student>(this.studentsUrl + "/" + student.id, student).pipe();
    }

    deleteStudent(studentId: number): Observable<Student> {
        console.log("Delete " + studentId);
        return this.http.delete<Student>(this.studentsUrl + "/" + studentId).pipe();
    }
}
