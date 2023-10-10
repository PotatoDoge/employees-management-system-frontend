import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { EmployeeModalServiceService } from '../employee-modal-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-info-modal',
  templateUrl: './employee-info-modal.component.html',
  styleUrls: ['./employee-info-modal.component.css'],
})
export class EmployeeInfoModalComponent {
  // attributes inside this component
  color: ThemePalette = 'primary';
  checked = false;
  empForm: FormGroup;
  snackBarDurationInSeconds = 5;
  shouldCloseDialog = false;

  constructor(
    private _fb: FormBuilder,
    private employeeModalService: EmployeeModalServiceService,
    private dialog: MatDialog
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      role: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      this.createEmployee(this.empForm.value);
    }
  }

  private createEmployee(formData: any) {
    this.employeeModalService.createEmployee(formData).subscribe({
      next: (response) => {
        console.log(response);
        this.dialog.closeAll();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
