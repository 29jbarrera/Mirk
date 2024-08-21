import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IncidentsTableComponent } from './incidents-Table/incidentsTable.component';

type SectionSelected = 'open' | 'close';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonModule, IncidentsTableComponent],
  templateUrl: './incidents.page.html',
  styleUrl: './incidents.page.scss',
})
export class IncidentsPage {
  section_selected: SectionSelected = 'open';

  select_section(section: SectionSelected){
    this.section_selected = section;
  }
}
