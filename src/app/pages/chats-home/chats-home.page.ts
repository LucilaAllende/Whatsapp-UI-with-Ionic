import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './chats-home.page.html',
  styleUrls: ['./chats-home.page.scss'],
})
export class ChatsHomePage implements OnInit {

  @ViewChild('new_chat') newChatModal!: ModalController;
  @ViewChild('popover') newChatForm!: PopoverController;

  openNewChat = false
  users= [    
    {
      "name": "Max",
      "id": 1,
      "photo": "https://i.pravatar.cc/345"
    },
    {
      "name": "Matt",
      "id": 2,
      "photo": "https://i.pravatar.cc/346"
    },
    {
      "name": "Mike",
      "id": 3,
      "photo": "https://i.pravatar.cc/347"
    },
    {
      "name": "Andrew",
      "id": 4,
      "photo": "https://i.pravatar.cc/348"
    }
  ] 
  //  users: Observable<any[]> = []

  constructor() { }

  ngOnInit() {
    console.log('List page initialized');
  }

  newChat() {
    this.openNewChat = true
  }

  onWillDismiss(event: any){
    console.log(event);
  }

  cancel(){
    this.newChatModal.dismiss()
    this.openNewChat = false
  }

  startChat(eventItem: any){

  }

}
