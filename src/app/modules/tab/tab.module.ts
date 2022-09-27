import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabBaseComponent } from './tab-base/tab-base.component';


@NgModule({
  declarations: [
    TabBaseComponent
  ],
  imports: [
    CommonModule,
    TabRoutingModule
  ]
})
export class TabModule { }
