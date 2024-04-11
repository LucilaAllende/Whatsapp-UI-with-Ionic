import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatsHomePage } from './chats-home.page';

describe('ListPage', () => {
  let component: ChatsHomePage;
  let fixture: ComponentFixture<ChatsHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
