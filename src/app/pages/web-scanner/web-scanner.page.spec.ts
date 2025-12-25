import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebScannerPage } from './web-scanner.page';

describe('WebScannerPage', () => {
  let component: WebScannerPage;
  let fixture: ComponentFixture<WebScannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WebScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
