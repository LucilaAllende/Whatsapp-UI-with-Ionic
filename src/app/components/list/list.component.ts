import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  chats = ['Max', 'Matt', 'Mike', 'Andrew'];
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
