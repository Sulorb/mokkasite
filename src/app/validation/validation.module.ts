import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ValidationPage } from './validation.page';
import {WebcamModule} from 'ngx-webcam';

const routes: Routes = [
  {
    path: '',
    component: ValidationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebcamModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ValidationPage]
})
export class ValidationPageModule {}
