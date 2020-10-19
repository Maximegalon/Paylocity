import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ]
    });

    service = TestBed.get(EmployeeService);
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('doesPersonGetDiscount should return true', (done: DoneFn) => {
    const person = {
      name: 'a',
    };

    expect(service.doesPersonGetDiscount(person)).toBe(true);
    done();
  });

  it('doesPersonGetDiscount should return false', (done: DoneFn) => {
    const person = {
      name: '!!!!',
    };

    expect(service.doesPersonGetDiscount(person)).toBe(false);
    done();
  });

  it('doesPersonGetDiscount should return false', (done: DoneFn) => {
    const person = {
      name: 'Frank',
    };

    expect(service.doesPersonGetDiscount(person)).toBe(false);
    done();
  });

  it('calculateEmployeeTotalCost should return the correct total', (done: DoneFn) => {
    const testData = [
      {
        employee: {
          id: 1,
          name: 'Michael',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [],
        total: 1000,
      },
      {
        employee: {
          id: 2,
          name: 'Angella',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [],
        total: 900,
      },
      {
        employee: {
          id: 3,
          name: 'Angella',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [{ name: 'aaa', employeeID: 3 }],
        total: 1350,
      },
      {
        employee: {
          id: 4,
          name: 'Angella',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [{ name: 'aaa', employeeID: 4 }, { name: 'bbb', employeeID: 4 }],
        total: 1850,
      },
      {
        employee: {
          id: 5,
          name: 'Angella',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [{ name: 'aaa', employeeID: 5 }, { name: 'bbb', employeeID: 5 }, { name: 'ccc', employeeID: 5 }],
        total: 2350,
      },
      {
        employee: {
          id: 6,
          name: 'Angella',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [{ name: 'aaa', employeeID: 6 }, { name: 'bbb', employeeID: 6 }, { name: 'ccc', employeeID: 6 }, { name: '!@#$@#$@$#$@#$', employeeID: 6 }],
        total: 2850,
      },
      {
        employee: {
          id: 3,
          name: 'NotAName',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [{ name: 'aaa', employeeID: 3 }],
        total: 1450,
      },
      {
        employee: {
          id: 4,
          name: 'NotAName',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [{ name: 'aaa', employeeID: 4 }, { name: 'bbb', employeeID: 4 }],
        total: 1950,
      },
      {
        employee: {
          id: 5,
          name: 'NotAName',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [{ name: 'aaa', employeeID: 5 }, { name: 'bbb', employeeID: 5 }, { name: 'ccc', employeeID: 5 }],
        total: 2450,
      },
      {
        employee: {
          id: 6,
          name: 'NotAName',
          salary: 3000,
          hireDate: new Date(),
        },
        dependants: [{ name: 'aaa', employeeID: 6 }, { name: 'bbb', employeeID: 6 }, { name: 'ccc', employeeID: 6 }, { name: '!@#$@#$@$#$@#$', employeeID: 6 }],
        total: 2950,
      },
    ];

    testData.forEach(test => {
      expect(service.calculateEmployeeTotalCost(test.employee, test.dependants)).toEqual(test.total);
    });

    done();
  });
});
