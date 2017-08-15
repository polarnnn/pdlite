import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UrinePage } from './urine';

@NgModule({
  declarations: [
    UrinePage,
  ],
  imports: [
    IonicPageModule.forChild(UrinePage),
  ],
})
export class UrinePageModule {}
