import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  chats = [
    {
        "name": "Max",
        "lastTime": "15:45",
        "lastText": "Hola, ¿cómo estás?",
        "notification": 0,
        "unread": 1
    },
    {
        "name": "Matt",
        "lastTime": "15:30",
        "lastText": "¿Qué planes tienes para hoy?",
        "notification": 0,
        "unread": 0
    },
    {
        "name": "Mike",
        "lastTime": "15:18",
        "lastText": "¿Viste la película que recomendé?",
        "notification": 0,
        "unread": 1
    },
    {
        "name": "Andrew",
        "lastTime": "15:02",
        "lastText": "Tenemos que ponernos al día pronto.",
        "notification": 0,
        "unread": 1
    }
  ]

  isMobile!: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('List component initialized');
  }

  openChat(chat: any) {
    console.log('Chat opened', chat);
    this.router.navigateByUrl(`/chat/${chat}`)
  }

}
