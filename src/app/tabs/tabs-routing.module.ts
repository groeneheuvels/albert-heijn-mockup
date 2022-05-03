import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'bonus',
        loadChildren: () =>
          import('./bonus/bonus.module').then((m) => m.BonusPageModule),
      },
      {
        path: 'koken',
        loadChildren: () =>
          import('./koken/koken.module').then((m) => m.KokenPageModule),
      },
      {
        path: 'producten',
        loadChildren: () =>
          import('./producten/producten.module').then(
            (m) => m.ProductenPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
