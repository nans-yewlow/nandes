import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  standalone: true,
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,     // <– ini wajib biar ngModel jalan
  ]
})
export class TransferPage {

  rekening: string = '';
  nominal: number | null = null;

  constructor(private alertCtrl: AlertController) {}

  async kirim() {

    const alert = await this.alertCtrl.create({
      header: 'Transfer Berhasil!',
      message: `
        Transfer ke rekening <b>${this.rekening}</b><br>
        Nominal: Rp ${this.nominal}
      `,
      buttons: ['OK']
    });

    await alert.present();
  }
}
