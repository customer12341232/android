import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GradePage } from './grade';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  // declarations: [
  //   GradePage,
  // ],
  imports: [
    // ComponentsModule,
    IonicPageModule.forChild(GradePage)
  ]
})
export class GradePageModule {}
