import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { MockComponent } from 'ng-mocks';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { EntryBarComponent } from '../../components/entry-bar/entry-bar.component';
import { BonusMessagePipe } from './employee-details.pipe';
import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ProgressSpinnerModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      declarations: [
        BonusMessagePipe,
        EmployeeDetailsComponent,
        MockComponent(EntryBarComponent)
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1
              },
            },
          }
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
