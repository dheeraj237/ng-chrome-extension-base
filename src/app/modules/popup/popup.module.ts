import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupRoutingModule } from './popup-routing.module';
import { PopupBaseComponent } from './popup-base/popup-base.component';


@NgModule({
  declarations: [
    PopupBaseComponent
  ],
  imports: [
    CommonModule,
    PopupRoutingModule
  ]
})
export class PopupModule { }
