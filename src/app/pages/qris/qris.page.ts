import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-qris',
  templateUrl: './qris.page.html',
  styleUrls: ['./qris.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class QrisPage {

  constructor(private navCtrl: NavController) {}

  // fungsi tombol scan
  startScan() {
    console.log('Scanner dimulai...');

    // nanti kita tambahkan scanning kamera beneran
    // sekarang kita simulasi langsung berhasil dan pindah halaman

    this.navCtrl.navigateForward('/scan-success');
  }

}
