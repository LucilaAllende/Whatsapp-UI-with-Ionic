import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface IChat {
  name: string;
  message: string;
  time: string;
  id: number;
  sender: number;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  name = ''
  message = ''
  isLoading = false 
  currentUserId = 1
  chats: IChat[] = [
    {name: 'John Doe', message: 'Hello', time: '12:00 PM', id: 1, sender: 1},
    {name: 'Pablo Doe', message: 'Hi!', time: '12:01 PM', id: 2, sender: 2},
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name') || ''
  }

  sendMessage(){

  }

}
