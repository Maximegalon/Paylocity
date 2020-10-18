import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee/employee.service';
import { IEmployee, ITableColumn } from '../interfaces';

// @TODO: Configure company namespace, instead of "app"
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeeListComponent implements OnInit {
  public employees: IEmployee[];
  cols: ITableColumn[];

  constructor(
    private _employee: EmployeeService,
    private _router: Router,
  ) {
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Employee Number' },
      { field: 'name', header: 'Name' },
      { field: 'salary', header: 'Annual Salary' },
      { field: 'hireDate', header: 'Hire Date' },
      { field: null, header: 'Employee Details' },
    ];

    this._employee.getEmployees().subscribe(
      (result: IEmployee[]) => {
        this.employees = result;
      },
      error => {
        alert('Sorry, an error has occured. Please try again.');
      }
    );
  }

  /**
  * Operate on the employee selected
  *
  * @param {number} employeeId The employee ID selected
  * @returns void
  */
  handleButtonClick(employeeId: number): void {
    this._router.navigate([`/employee/${employeeId}`]);
  }
}
