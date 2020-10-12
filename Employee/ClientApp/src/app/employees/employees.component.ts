import { Component, Inject, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @TODO: Configure company namespace, instead of "app"
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeeListComponent implements OnInit {
  public forecasts: WeatherForecast[];
  cols: any[];
  first = 0;
  rows = 10;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'employees').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Employee Number' },
      { field: 'name', header: 'Name' },
      { field: 'salary', header: 'Salary' },
      { field: 'hireDate', header: 'Hire Date' },
      { field: null, header: 'Employee Details' },
    ];
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.forecasts ? this.first === (this.forecasts.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.forecasts ? this.first === 0 : true;
  }
}

interface WeatherForecast {
  id: any;
  name: any;
  salary: any;
  hireDate: any;
}
