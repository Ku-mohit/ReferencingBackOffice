import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcpmComponent } from './testcpm.component';

describe('TestcpmComponent', () => {
  let component: TestcpmComponent;
  let fixture: ComponentFixture<TestcpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestcpmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestcpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
