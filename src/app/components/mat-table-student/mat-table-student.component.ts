import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { Student } from 'src/app/model/Student';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-mat-table-student',
  templateUrl: './mat-table-student.component.html',
  styleUrls: ['./mat-table-student.component.css']
})

export class MatTableStudentComponent implements AfterViewInit {
    displayedColumns: string[] = ['id', 'name', 'surname'];
    dataSource = new MatTableDataSource<Student>([]);
  
    constructor(private baseService: BaseServiceService,
        private _liveAnnouncer: LiveAnnouncer){
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
  }