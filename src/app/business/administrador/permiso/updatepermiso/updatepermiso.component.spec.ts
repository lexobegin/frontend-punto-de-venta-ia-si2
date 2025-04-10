import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepermisoComponent } from './updatepermiso.component';

describe('UpdatepermisoComponent', () => {
  let component: UpdatepermisoComponent;
  let fixture: ComponentFixture<UpdatepermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatepermisoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatepermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
