import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionPersonasComponent } from './administracion-personas.component';

describe('AdministracionPersonasComponent', () => {
  let component: AdministracionPersonasComponent;
  let fixture: ComponentFixture<AdministracionPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
