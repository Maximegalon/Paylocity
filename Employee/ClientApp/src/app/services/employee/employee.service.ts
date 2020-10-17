import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../../interfaces/IEmployee';
import { IPerson } from '../../interfaces/IPerson';
import { IDependant } from '../../interfaces/IDependant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: string;
  EMPLOYEEBENEFITCOST = 1000;
  DEPENDANTBENEFITCOST = 500;
  EMPLOYEEDISCOUNT = .1;
  DEPENDANTDISCOUNT = .1;

  constructor(@Inject('BASE_URL') baseUrl: string, private _http: HttpClient) {
    this.baseUrl = baseUrl;
  }

 /**
 * Get employees
 * 
 * @returns Observable<IEmployee[]>
 */
  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<any>(`${this.baseUrl}employees`);
  }

  /**
  * Get employee details
  *
  * @returns Observable<IEmployee>
  */
  getEmployeeDetails(employeeId: number): Observable<IEmployee> {
    return this._http.get<any>(`${this.baseUrl}employees/details/${employeeId.toString()}`);
  }

  /**
  * Determines if the person gets a discount
  * 
  * @returns boolean
  */
  doesPersonGetDiscount(person: IPerson): boolean {
    const name: string = person.name;

    return (name && name.trim().toLowerCase().substring(0, 1) === 'a');
  }

  // @TODO: Inject a config service with the values, don't hard code consts
  calculateEmployeeTotalCost(employee: IEmployee, dependants: IDependant[]): number {
    const employeeCost: number = this.EMPLOYEEBENEFITCOST * ((this.doesPersonGetDiscount(employee)) ? (1 - this.EMPLOYEEDISCOUNT) : 1);
    const dependantsCountWithBonus = dependants.filter(d => this.doesPersonGetDiscount(d)).length;
    const dependantsCost = dependantsCountWithBonus * this.DEPENDANTBENEFITCOST * (1 - this.EMPLOYEEDISCOUNT) + (dependants.length - dependantsCountWithBonus) * this.DEPENDANTBENEFITCOST;

    return employeeCost + dependantsCost;    
  }
}
