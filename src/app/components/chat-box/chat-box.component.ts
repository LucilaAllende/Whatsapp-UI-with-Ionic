import { Component, Input, OnInit } from '@angular/core';
import { IChat } from 'src/app/pages/chat/chat.page';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent  implements OnInit {

  @Input() chat!: IChat
  @Input() currentUserId!: number

  constructor() { }

  ngOnInit() {
    console.log(this.chat);
  }

}
