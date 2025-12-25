import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanSuccessPage } from './scan-success.page';

describe('ScanSuccessPage', () => {
  let component: ScanSuccessPage;
  let fixture: ComponentFixture<ScanSuccessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
