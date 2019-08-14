import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTwoComponent } from './versions/home-two/home-two.component';

// Routes
const routes: Routes = [
  {
    path: '',
    component: HomeTwoComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
