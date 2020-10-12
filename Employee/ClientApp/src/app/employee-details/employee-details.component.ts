import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  dependants: string[] = [];
  newdependantname = '';
  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      dependantName: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

  addDependant(): void {
    this.dependants.push(this.formGroup.value.dependantName);
    this.formGroup.patchValue({
      dependantName: ''
    });
  }

  removeDependant(idx: number): void {
    this.dependants.splice(idx, 1);
  }
}
