import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlusPage } from './plus.page';

import { NgCalendarModule  } from 'ionic2-calendar';


const routes: Routes = [
  {
    path: '',
    component: PlusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [PlusPage]
})
export class PlusPageModule {}
