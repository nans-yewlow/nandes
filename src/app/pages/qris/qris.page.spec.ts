import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrisPage } from './qris.page';

describe('QrisPage', () => {
  let component: QrisPage;
  let fixture: ComponentFixture<QrisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
