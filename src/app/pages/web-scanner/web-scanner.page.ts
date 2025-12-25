import { Component, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import {
  BrowserMultiFormatReader,
  IScannerControls
} from '@zxing/browser';

@Component({
  selector: 'app-web-scanner',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './web-scanner.page.html',
  styleUrls: ['./web-scanner.page.scss']
})
export class WebScannerPage implements OnDestroy {

  private codeReader = new BrowserMultiFormatReader();
  private controls: IScannerControls | null = null;

  scanResult: string | null = null;

  async startScan() {
    try {
      this.codeReader.decodeFromVideoDevice(
        undefined,        // kamera default
        'video',          // id video html
        (result, err, controls) => {
          if (controls && !this.controls) {
            this.controls = controls;
          }

          if (result) {
            this.scanResult = result.getText();
            this.stopScan();
            alert('QR Terdeteksi: ' + this.scanResult);
          }
        }
      );
    } catch (error) {
      console.error(error);
      alert('Kamera gagal dibuka');
    }
  }

  stopScan() {
    if (this.controls) {
      this.controls.stop();
      this.controls = null;
    }
  }

  ngOnDestroy() {
    this.stopScan();
  }
}
