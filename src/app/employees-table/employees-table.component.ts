import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css'],
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
  ],
})
export class EmployeesTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'role'];
  dataSource: Employee[] = [];

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _httpClient: HttpClient,
    private employeeService: EmployeeService
  ) {}

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (data: any) => {
        this.dataSource = data.data.employees;
        this.isLoadingResults = false;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  ngAfterViewInit() {
    this.getEmployees();
  }
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/v1/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.apiUrl);
  }
}
