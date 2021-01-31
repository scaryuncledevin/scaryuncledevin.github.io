import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleCachePage } from './google-cache.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleCachePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleCachePageRoutingModule {}
