import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrolComponent } from './listrol.component';

describe('ListrolComponent', () => {
  let component: ListrolComponent;
  let fixture: ComponentFixture<ListrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListrolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
