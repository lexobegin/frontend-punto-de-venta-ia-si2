import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterproductoComponent } from './registerproducto.component';

describe('RegisterproductoComponent', () => {
  let component: RegisterproductoComponent;
  let fixture: ComponentFixture<RegisterproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
