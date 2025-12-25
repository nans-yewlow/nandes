import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
  },

  {
    path: 'qris',
    loadComponent: () =>
      import('./pages/qris/qris.page').then(m => m.QrisPage),
  },

  {
    path: 'transfer',
    loadComponent: () =>
      import('./pages/transfer/transfer.page').then(m => m.TransferPage),
  },

  {
    path: 'topup',
    loadComponent: () =>
      import('./pages/topup/topup.page').then(m => m.TopupPage),
  },

  {
    path: 'scan-success',
    loadComponent: () =>
      import('./pages/scan-success/scan-success.page').then(m => m.ScanSuccessPage),
  },

  {
    path: 'scan',
    loadComponent: () =>
      import('./pages/scan/scan.page').then(m => m.ScanPage),
  },

  {
    path: 'web-scanner',
    loadComponent: () =>
      import('./pages/web-scanner/web-scanner.page').then(m => m.WebScannerPage),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
