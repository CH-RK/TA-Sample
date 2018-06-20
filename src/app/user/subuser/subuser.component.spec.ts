import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubuserComponent } from './subuser.component';

describe('SubuserComponent', () => {
  let component: SubuserComponent;
  let fixture: ComponentFixture<SubuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
