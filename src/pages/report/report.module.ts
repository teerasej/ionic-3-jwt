import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './report';

@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    ChartsModule
  ],
})
export class ReportPageModule {}
