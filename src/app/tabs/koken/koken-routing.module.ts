import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KokenPage } from './koken.page';

const routes: Routes = [
  {
    path: '',
    component: KokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KokenPageRoutingModule {}
