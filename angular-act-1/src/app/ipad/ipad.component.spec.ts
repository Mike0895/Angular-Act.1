import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadComponent } from './ipad.component';

describe('IpadComponent', () => {
  let component: IpadComponent;
  let fixture: ComponentFixture<IpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
