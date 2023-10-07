import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeInfoModalComponent } from './employee-info-modal/employee-info-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'employees-management-system-frontend';

  constructor(private _dialog: MatDialog) {}

  openEmployeeInfoModal() {
    this._dialog.open(EmployeeInfoModalComponent);
  }
}
