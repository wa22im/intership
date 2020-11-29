import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'data',
    component: DataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
