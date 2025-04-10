import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterolComponent } from './updaterol.component';

describe('UpdaterolComponent', () => {
  let component: UpdaterolComponent;
  let fixture: ComponentFixture<UpdaterolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdaterolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdaterolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
