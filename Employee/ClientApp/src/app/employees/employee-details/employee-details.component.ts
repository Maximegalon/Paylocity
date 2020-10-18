import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee/employee.service';
import { IEmployee } from '../../interfaces/IEmployee';
import { IDependant } from '../../interfaces/IDependant';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  loading = true;
  employeeId: number;
  employee: IEmployee;
  dependants: IDependant[] = [];
  newdependantname = '';
  numberOfPayperiods = 26;
  employeeCost: number;
  employeeTotalCost: number;

  constructor(
    private _employee: EmployeeService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.employeeId = parseInt(this._activatedRoute.snapshot.paramMap.get('employeeId'), 10);

    this._employee.getEmployeeDetails(this.employeeId).subscribe(
      (result: IEmployee) => {
        this.employee = result;
        this.loading = false;

        this.employeeCost = this._employee.calculateEmployeeTotalCost(this.employee, []);
        this.employeeTotalCost = this.employeeCost;
      },
      error => {
        // @TODO: Throw a toast and handle page gracefully
        alert('Sorry, an error has occured. Please try again.');
      }
    );
  }

  /**
  * Assigns a dependant to the employee
  *
  * @param {string} dependantName The name of the dependant
  * @returns void
  */
  addDependant(dependantName: string): void {
    this.dependants.push({ employeeID: this.employeeId, name: dependantName });

    this.calculateEmployeeTotalCost();
  }

  /**
  * Removes a dependant assigned to the employee
  *
  * @param {number} idx The ordinal location in the array of dependants to remove
  * @returns void
  */
  removeDependant(idx: number): void {
    this.dependants.splice(idx, 1);

    this.calculateEmployeeTotalCost();
  }

  /**
  * Sets the total employee (without dependants) cost
  *
  * @returns void
  */
  private calculateEmployeeTotalCost(): void {
    this.employeeTotalCost = this._employee.calculateEmployeeTotalCost(this.employee, this.dependants);
  }
}
