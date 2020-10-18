import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryBarComponent } from './entry-bar.component';

describe('EntryBarComponent', () => {
  let component: EntryBarComponent;
  let fixture: ComponentFixture<EntryBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
