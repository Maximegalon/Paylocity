import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { IDependant } from '../../interfaces/IDependant';

@Pipe({
  name: 'bonusmessage'
})
export class BonusMessagePipe implements PipeTransform {
  constructor(private employeeService: EmployeeService) {
  }

  transform(dependant: IDependant, args?: any): string {
    const discountApplies = this.employeeService.doesPersonGetDiscount(dependant);

    return discountApplies ? '(There IS a name based cost reduction)' : '(There IS NOT a name based cost reduction)';
  }
}
