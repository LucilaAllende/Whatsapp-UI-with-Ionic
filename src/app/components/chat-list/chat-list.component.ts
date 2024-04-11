import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list-component',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent  implements OnInit {

  chats = [
    {
        "name": "Max",
        "lastTime": "15:45",
        "lastText": "Hola, ¿cómo estás?",
        "notification": 0,
        "unread": 1,
        "photo": "https://i.pravatar.cc/345"
    },
    {
        "name": "Matt",
        "lastTime": "15:30",
        "lastText": "¿Qué planes tienes para hoy?",
        "notification": 0,
        "unread": 0,
        "photo": "https://i.pravatar.cc/346"
    },
    {
        "name": "Mike",
        "lastTime": "15:18",
        "lastText": "¿Viste la película que recomendé?",
        "notification": 0,
        "unread": 1,
        "photo": "https://i.pravatar.cc/347"
    },
    {
        "name": "Andrew",
        "lastTime": "15:02",
        "lastText": "Tenemos que ponernos al día pronto.",
        "notification": 0,
        "unread": 1,
        "photo": "https://i.pravatar.cc/348"
    }
  ]

  isMobile!: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('List component initialized');
  }

  openChat(chat: any) {
    console.log('Chat opened', chat);
    this.router.navigateByUrl(`/chat/${chat.name}`)
  }

}
