import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-employee-info-modal',
  templateUrl: './employee-info-modal.component.html',
  styleUrls: ['./employee-info-modal.component.css'],
})
export class EmployeeInfoModalComponent implements OnInit {
  // attributes inside this component
  color: ThemePalette = 'primary';
  checked = false;

  constructor() {}

  ngOnInit(): void {}
}
