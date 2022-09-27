import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupBaseComponent } from "./popup-base/popup-base.component";

const routes: Routes = [
	{
		path: "",
		component: PopupBaseComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupRoutingModule { }
