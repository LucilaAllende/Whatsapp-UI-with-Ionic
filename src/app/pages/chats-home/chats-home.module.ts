import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsHomePageRoutingModule } from './chats-home-routing.module';

import { ChatsHomePage } from './chats-home.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsHomePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ChatsHomePage]
})
export class ChatsPagePageModule {}
