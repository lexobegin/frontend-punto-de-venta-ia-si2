import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterclienteComponent } from './registercliente.component';

describe('RegisterclienteComponent', () => {
  let component: RegisterclienteComponent;
  let fixture: ComponentFixture<RegisterclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterclienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
