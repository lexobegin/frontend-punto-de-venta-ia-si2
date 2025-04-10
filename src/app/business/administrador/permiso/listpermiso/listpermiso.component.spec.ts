import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpermisoComponent } from './listpermiso.component';

describe('ListpermisoComponent', () => {
  let component: ListpermisoComponent;
  let fixture: ComponentFixture<ListpermisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListpermisoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListpermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
