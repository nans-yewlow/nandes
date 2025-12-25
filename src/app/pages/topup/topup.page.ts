import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.page.html',
  styleUrls: ['./topup.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class TopupPage {

  nominal: number | null = null;
  bank: string = '';
  message = '';

  constructor() {}

  submitTopup() {
    this.message = `Top Up berhasil: Rp ${this.nominal} dari bank ${this.bank}`;
  }
}
