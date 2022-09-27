import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabBaseComponent } from "./tab-base/tab-base.component";

const routes: Routes = [
	{
		path: "",
		component: TabBaseComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
