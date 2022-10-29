import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/employees'
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/employees'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
