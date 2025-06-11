import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPastaPage } from './newpasta.page';

const routes: Routes = [
  {
    path: '',
    component: NewPastaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpastaPageRoutingModule {}
