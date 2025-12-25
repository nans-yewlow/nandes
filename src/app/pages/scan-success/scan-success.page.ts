import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scan-success',
  standalone: true,
  templateUrl: './scan-success.page.html',
  styleUrls: ['./scan-success.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class ScanSuccessPage {

  constructor() {}

}
