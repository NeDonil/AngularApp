import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const students = [
            {id: 0, name: 'Ivan', surname: "Ivanov"},
            {id: 1, name: 'Ivan', surname: "Search"},
            {id: 2, name: 'Danil', surname: "Wantropp"},
            {id: 3, name: 'Alex', surname: "Wantropp"},
            {id: 4, name: 'Ivan', surname: "Dmitriyev"},
            {id: 5, name: 'Ilya', surname: "Ignathinko"},
            {id: 6, name: 'Andrew', surname: "Abramov"},
            {id: 7, name: 'Danil', surname: "Kabup"},
        ];
        return {students};
    }

    genId(students: Student[]): number {
        return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1: 11;
    }
}
