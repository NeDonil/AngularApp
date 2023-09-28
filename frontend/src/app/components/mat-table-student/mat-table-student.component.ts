import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { Student } from 'src/app/model/Student';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { StudentEditorWrapperComponent } from '../student-editor/student-editor-wrapper/student-editor-wrapper.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mat-table-student',
  templateUrl: './mat-table-student.component.html',
  styleUrls: ['./mat-table-student.component.css']
})

export class MatTableStudentComponent implements AfterViewInit {
    displayedColumns: string[] = ['actions', 'id', 'name', 'surname'];
    dataSource = new MatTableDataSource<Student>([]);
  
    constructor(private baseService: BaseServiceService,
        private _liveAnnouncer: LiveAnnouncer,
        public dialog: MatDialog){
    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    ngAfterViewInit() {
      this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
          this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
          this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    addNewStudent(){
        const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
            width: "400px",
            data: null
        });

        dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
            if(result != null){
            this.baseService.addNewStudent(result).subscribe(k =>
                this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data));
            }
        });
    }

    editStudent(student: Student){
        const studentEditingStudent = this.dialog.open(StudentEditorWrapperComponent, {
            width: "400px",
            data: {id: student.id, name: student.name, surname: student.surname}
        });

        studentEditingStudent.afterClosed().subscribe((student: Student) => {
            if(student != null){
                this.baseService.editStudent(student).subscribe(k =>
                    this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data));
            }
        });
    }

    deleteStudent(studentId: number){
        if(studentId != null){
            this.baseService.deleteStudent(studentId).subscribe(k =>
                this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data));;
        } 
    }
  }