import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercategoriaComponent } from './registercategoria.component';

describe('RegistercategoriaComponent', () => {
  let component: RegistercategoriaComponent;
  let fixture: ComponentFixture<RegistercategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistercategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistercategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
