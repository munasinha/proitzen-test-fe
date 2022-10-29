import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: any = [];

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getAllEmployers();
  }

  getAllEmployers() {

    this.apiService.getAllEmployees().subscribe((res: any) => {
      this.employees = res;
      console.log(res);

    });

  }

}
