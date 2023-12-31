import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { SettingsComponent } from './settings/settings.component';
import { ExperimentComponent } from './experiment/experiment.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'employees',
    component: EmployeesTableComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'testing',
    component: ExperimentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
