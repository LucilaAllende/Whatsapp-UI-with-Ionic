import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ListComponent]
})
export class SharedComponentsModule { }
