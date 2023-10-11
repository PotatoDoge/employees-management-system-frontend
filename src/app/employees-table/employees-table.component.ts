import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee-modal-service.service';

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
export class EmployeesTableComponent implements OnInit {
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
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }

  ngOnInit() {
    this.getEmployees();
  }
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}
