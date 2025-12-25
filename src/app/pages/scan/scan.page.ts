import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  standalone: true,
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class ScanPage {

  constructor(private router: Router) {}

  goToWebScanner() {
    this.router.navigate(['/web-scanner']);
  }

}
