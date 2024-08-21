import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'km-messages-filter',
  standalone: true,
  imports: [CommonModule, DropdownModule],
  templateUrl: './messages-filter.page.html',
  styleUrl: './messages-filter.page.scss',
})
export class MessagesFilterPage {}
