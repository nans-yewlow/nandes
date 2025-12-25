import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import jsQR from 'jsqr';

@Component({
  selector: 'app-qris',
  templateUrl: './qris.page.html',
  styleUrls: ['./qris.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class QrisPage implements OnDestroy {
  @ViewChild('video', { static: false })
  videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false })
  canvasElement!: ElementRef<HTMLCanvasElement>;

  scanning: boolean = false;
  stream: MediaStream | null = null;
  scanInterval: any;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnDestroy() {
    this.stopCamera();
  }

  // fungsi tombol scan
  async startScan() {
    if (this.scanning) {
      this.stopCamera();
      return;
    }

    console.log('Scanner dimulai...');
    this.scanning = true;

    try {
      const constraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: 400 },
          height: { ideal: 400 },
        },
      };

      this.stream = await navigator.mediaDevices.getUserMedia(constraints);

      // Give a moment for the video element to render
      setTimeout(() => {
        if (this.videoElement && this.videoElement.nativeElement) {
          const video = this.videoElement.nativeElement;
          video.srcObject = this.stream;
          video.play();
          this.startScanningLoop();
        } else {
          console.error('Video element not found');
          this.showToast('Gagal memuat tampilan kamera');
          this.stopCamera();
        }
      }, 100);
    } catch (err) {
      console.error('Error accessing camera:', err);
      this.showToast('Gagal mengakses kamera. Pastikan izin diberikan.');
      this.scanning = false;
    }
  }

  stopCamera() {
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
      this.scanInterval = null;
    }

    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }

    this.scanning = false;
  }

  startScanningLoop() {
    this.scanInterval = setInterval(() => {
      this.scan();
    }, 200); // scan every 200ms
  }

  scan() {
    if (!this.videoElement?.nativeElement || !this.canvasElement?.nativeElement)
      return;

    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    if (video.readyState === video.HAVE_ENOUGH_DATA && ctx) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code) {
        console.log('Found QR code', code.data);
        this.stopCamera();
        // Here you would process the code.data
        // For now, redirect as before
        this.showToast(`QR Code Terdeteksi: ${code.data}`);

        // Simulasi sukses seperti sebelumnya
        setTimeout(() => {
          this.navCtrl.navigateForward('/scan-success');
        }, 1000);
      }
    }
  }

  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
