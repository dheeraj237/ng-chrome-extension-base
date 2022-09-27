import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsRoutingModule } from './options-routing.module';
import { OptionHomeComponent } from "./option-home/option-home.component";

@NgModule({
	declarations: [OptionHomeComponent],
	imports: [CommonModule, OptionsRoutingModule],
})
export class OptionsModule {}
