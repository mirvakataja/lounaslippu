import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobilepayPage } from './mobilepay';

@NgModule({
  declarations: [
    MobilepayPage,
  ],
  imports: [
    IonicPageModule.forChild(MobilepayPage),
  ],
})
export class MobilepayPageModule {}
