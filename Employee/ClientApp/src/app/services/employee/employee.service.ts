import { Injectable } from '@angular/core';
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

  constructor(private _http: HttpClient) {
    this.baseUrl = this.getBaseUrl();
  }

 /**
 * Get employees from the server
 *
 * @returns Observable<IEmployee[]>
 */
  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<any>(`${this.baseUrl}employees`);
  }

  /**
  * Get employee details
  *
  * @param {number} employeeId The employee ID to fetch information
  * @returns Observable<IEmployee>
  */
  getEmployeeDetails(employeeId: number): Observable<IEmployee> {
    return this._http.get<any>(`${this.baseUrl}employees/details/${employeeId.toString()}`);
  }

  /**
  * Determines if the person gets a discount
  *
  * @param {IPerson} person The person to check for a discount
  * @returns boolean
  */
  doesPersonGetDiscount(person: IPerson): boolean {
    const name: string = person.name;

    return (name && name.trim().toLowerCase().substring(0, 1) === 'a');
  }

  /**
  * Determines if the person gets a discount
  *
  * @param {IEmployee} employee The employee to determine costs for
  * @param {IDependant[]} dependants The employee's dependants to determine costs for
  * @returns number
  */
  calculateEmployeeTotalCost(employee: IEmployee, dependants: IDependant[]): number {
    // @TODO: Inject a config service with the values, don't hard code consts
    const employeeCost: number = this.EMPLOYEEBENEFITCOST * ((this.doesPersonGetDiscount(employee)) ? (1 - this.EMPLOYEEDISCOUNT) : 1);
    const dependantsCountWithBonus = dependants.filter(d => this.doesPersonGetDiscount(d)).length;
    const dependantsCost = dependantsCountWithBonus * this.DEPENDANTBENEFITCOST * (1 - this.EMPLOYEEDISCOUNT) +
      (dependants.length - dependantsCountWithBonus) * this.DEPENDANTBENEFITCOST;

    return employeeCost + dependantsCost;
  }

  /**
  * Gets the url to make calls too. This would normally go through auth, middlewear, proxy etc. etc
  *
  * @returns string
  */
  private getBaseUrl(): string {
    return document.getElementsByTagName('base')[0].href;
  }
}
