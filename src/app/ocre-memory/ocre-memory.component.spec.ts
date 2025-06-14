import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcreMemoryComponent } from './ocre-memory.component';

describe('OcreMemoryComponent', () => {
  let component: OcreMemoryComponent;
  let fixture: ComponentFixture<OcreMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcreMemoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcreMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
