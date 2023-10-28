import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog/public-api';
import { Employee, EmployeeService } from '../employee-modal-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  example = ['A', 'b', 'c'];
  dataSource = new MatTableDataSource<Employee>([]);

  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeService.getEmployeesFromComponent().subscribe((employees) => {
      this.dataSource.data = employees;
    });
  }
}
