import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const students = [
            {id: 0, name: 'Name1', surname: "Surname1"},
            {id: 1, name: 'Name2', surname: "Surname2"},
            {id: 2, name: 'Name3', surname: "Surname3"},
            {id: 3, name: 'Name4', surname: "Surname4"}
        ];
        return {students};
    }

    genId(students: Student[]): number {
        return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1: 11;
    }
}
