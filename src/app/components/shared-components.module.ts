import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [ChatListComponent, UserListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [ChatListComponent, UserListComponent]
})
export class SharedComponentsModule { }
