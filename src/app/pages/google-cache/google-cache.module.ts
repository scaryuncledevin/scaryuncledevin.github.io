import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleCachePageRoutingModule } from './google-cache-routing.module';

import { GoogleCachePage } from './google-cache.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleCachePageRoutingModule
  ],
  declarations: [GoogleCachePage]
})
export class GoogleCachePageModule {}
