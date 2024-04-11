import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  implements OnInit {

  @Input() item: any
  @Output() openNewChat: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    console.log('UserListComponent initialized');
  }

  redirect(){
    this.openNewChat.emit(this.item)
  }

}
