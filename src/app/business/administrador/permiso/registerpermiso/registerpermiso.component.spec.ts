import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpermisoComponent } from './registerpermiso.component';

describe('RegisterpermisoComponent', () => {
  let component: RegisterpermisoComponent;
  let fixture: ComponentFixture<RegisterpermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterpermisoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterpermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
