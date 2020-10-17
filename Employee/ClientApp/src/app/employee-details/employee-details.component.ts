import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee/employee.service';
import { IEmployee } from '../interfaces/IEmployee';
import { IDependant } from '../interfaces/IDependant';

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
  formGroup: FormGroup;
  numberOfPayperiods = 26;
  employeeCost: number;
  employeeTotalCost: number;

  constructor(
    private _employee: EmployeeService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employeeId = parseInt(this._activatedRoute.snapshot.paramMap.get('employeeId'));

    this.formGroup = new FormGroup({
      dependantName: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });

    this._employee.getEmployeeDetails(this.employeeId).subscribe(
      (result: IEmployee) => {
        this.employee = result;
        this.loading = false;

        this.employeeCost = this._employee.calculateEmployeeTotalCost(this.employee, []);
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
  * @returns void
  */
  addDependant(): void {
    this.dependants.push({ employeeID: this.employeeId, name: this.formGroup.value.dependantName });
    this.formGroup.patchValue({
      dependantName: ''
    });

    this.calculateEmployeeTotalCost();
  }

  /**
  * Removes a dependant assigned to the employee
  *
  * @returns void
  */
  removeDependant(idx: number): void {
    this.dependants.splice(idx, 1);

    this.calculateEmployeeTotalCost();
  }

  private calculateEmployeeTotalCost(): void {
    this.employeeTotalCost = this._employee.calculateEmployeeTotalCost(this.employee, this.dependants);
  }
}
