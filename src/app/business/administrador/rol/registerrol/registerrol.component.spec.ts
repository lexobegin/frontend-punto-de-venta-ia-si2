import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterrolComponent } from './registerrol.component';

describe('RegisterrolComponent', () => {
  let component: RegisterrolComponent;
  let fixture: ComponentFixture<RegisterrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterrolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
