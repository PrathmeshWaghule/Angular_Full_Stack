import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrathmeshComponent } from './prathmesh-component';

describe('PrathmeshComponent', () => {
  let component: PrathmeshComponent;
  let fixture: ComponentFixture<PrathmeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrathmeshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrathmeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
