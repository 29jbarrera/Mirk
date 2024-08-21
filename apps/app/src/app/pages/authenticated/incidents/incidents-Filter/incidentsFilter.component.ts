import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'km-incidents-filter',
  standalone: true,
  imports: [CommonModule, DropdownModule, FormsModule, TagModule],
  templateUrl: './incidentsFilter.component.html',
  styleUrl: './incidentsFilter.component.scss',
})
export class IncidentsFilterComponent {
  selectedEstado: any;

  estados: any[] = [];
  ultimasAcciones: any[] = [];
  motivosApertura: any[] = [];
}
