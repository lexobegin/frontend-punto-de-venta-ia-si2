import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclienteComponent } from './listcliente.component';

describe('ListclienteComponent', () => {
  let component: ListclienteComponent;
  let fixture: ComponentFixture<ListclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListclienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
