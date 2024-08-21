import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { MessageReceivePage } from './message-receive/message-receive.page';
import { MessageSendPage } from './message-send/message-send.page';

@Component({
  standalone: true,
  imports: [CommonModule, TagModule, ButtonModule, MessageReceivePage, MessageSendPage],
  templateUrl: './message.page.html',
  styleUrl: './message.page.scss',
})
export class MessagePage {}
