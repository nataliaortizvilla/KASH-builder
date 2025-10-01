import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoceKashComponent } from './conoce-kash.component';

describe('ConoceKashComponent', () => {
  let component: ConoceKashComponent;
  let fixture: ComponentFixture<ConoceKashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConoceKashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConoceKashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
