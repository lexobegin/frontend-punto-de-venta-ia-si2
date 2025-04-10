import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecategoriaComponent } from './updatecategoria.component';

describe('UpdatecategoriaComponent', () => {
  let component: UpdatecategoriaComponent;
  let fixture: ComponentFixture<UpdatecategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatecategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatecategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
