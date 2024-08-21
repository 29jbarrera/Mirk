import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Message } from './types';
import { TagModule } from 'primeng/tag';
import { MESSAGE_DATA } from './data';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesFilterPage } from './messages-filter/messages-filter.page';
import { FormsModule } from '@angular/forms';

type SectionSelected = 'non-read' | 'all';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    TagModule,
    DropdownModule,
    MessagesFilterPage,
    FormsModule,
  ],
  templateUrl: './messages.page.html',
  styleUrl: './messages.page.scss',
})
export class MessagesPage {
  section_selected: SectionSelected = 'non-read';
  messages: Message[] = MESSAGE_DATA;
  selected_messages: Message[] = [];
  filtered_messages: Message[] = MESSAGE_DATA; 
  search_term: string = ''; 

  rowsPerPageOptions = [
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
  ];

  rows: number = 10;
  first: number = 0;

  select_section(section: SectionSelected) {
    this.section_selected = section;
  }

  getParticipantsNames(message: Message) {
    return message.authorized_participants
      .map((participant) => participant.display_name)
      .join(', ');
  }

  getEntityName(message: Message) {
    return message.entities.map((entity) => entity.label).join(', ');
  }

  getTopic(message: Message) {
    return message.topic.value;
  }

  onPageChange(event: any) {
    this.rows = event.rows;
  }

  updateRows(event: any) {
    if (
      typeof event === 'object' &&
      event.value &&
      typeof event.value.value === 'number'
    ) {
      this.rows = event.value.value;
    } else {
      console.error('El valor seleccionado no es un número:', event);
    }
  }

  previousPage(dt: any) {
    if (this.first > 0) {
      this.first -= this.rows;
      dt.first = this.first;
    }
  }

  nextPage(dt: any) {
    if (this.first + this.rows < this.messages.length) {
      this.first += this.rows;
      dt.first = this.first;
    }
  }

  filterMessages() {
    this.filtered_messages = this.messages.filter((message) => this.matchReference(message));
  }

  matchReference(message: Message): boolean {
    if (this.search_term === '') {
      return true;
    }
    return this.getEntityName(message)
      .toLowerCase()
      .includes(this.search_term.toLowerCase());
  }
}
