import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { Student } from 'src/app/model/Student';
import { BaseServiceService } from 'src/app/service/base-service.service';

@Component({
  selector: 'app-mat-table-student',
  templateUrl: './mat-table-student.component.html',
  styleUrls: ['./mat-table-student.component.css']
})

export class MatTableStudentComponent implements AfterViewInit {
    displayedColumns: string[] = ['id', 'name', 'surname'];
    dataSource = new MatTableDataSource<Student>([]);
  
    constructor(private baseService: BaseServiceService){
    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data);
      this.dataSource.paginator = this.paginator;
    }
  }