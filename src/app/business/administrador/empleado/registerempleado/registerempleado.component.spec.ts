import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterempleadoComponent } from './registerempleado.component';

describe('RegisterempleadoComponent', () => {
  let component: RegisterempleadoComponent;
  let fixture: ComponentFixture<RegisterempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterempleadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
