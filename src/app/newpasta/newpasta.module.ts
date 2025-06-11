import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpastaPageRoutingModule } from './newpasta-routing.module';

import { NewPastaPage } from './newpasta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpastaPageRoutingModule
  ],
  //declarations: [NewPastaPage]
})
export class NewpastaPageModule {}
