import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebScannerPage } from './web-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: WebScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebScannerPageRoutingModule {}
