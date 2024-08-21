import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { IncidentsFilterComponent } from '../incidents-Filter/incidentsFilter.component';
import { Router } from '@angular/router';

type Product = {
  incidence: string;
  order: string;
  product: string;
  lastAction: string;
  incidentStatus: string;
};

@Component({
  selector: 'km-incidents-table',
  standalone: true,
  imports: [
    CommonModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    PaginatorModule,
    DropdownModule,
    ButtonGroupModule,
    TableModule,
    FormsModule,
    TagModule,
    IncidentsFilterComponent,
  ],
  templateUrl: './incidentsTable.component.html',
  styleUrl: './incidentsTable.component.scss',
})
export class IncidentsTableComponent {
  search_term: string = '';

  first: number = 0;
  rows: number = 10;
  filtered_products!: Product[] | [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filtered_products = this.products.slice();
  }

  products: Product[] = [
    {
      incidence: 'INC123456',
      order: 'ORD987654',
      product: 'Producto A',
      lastAction: 'Revisión de calidad',
      incidentStatus: 'Nueva incidencia',
    },
    {
      incidence: 'INC234567',
      order: 'ORD876543',
      product: 'Producto B',
      lastAction: 'Envío programado',
      incidentStatus: 'Nueva incidencia',
    },
    {
      incidence: 'INC345678',
      order: 'ORD765432',
      product: 'Producto C',
      lastAction: 'Retorno a proveedor',
      incidentStatus: 'Nueva ',
    },
  ];

  rowsPerPageOptions = [
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
  ];

  onPageChange(event: any) {
    this.rows = event.rows;
    this.first = event.first;
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
    if (this.first + this.rows < this.products.length) {
      this.first += this.rows;
      dt.first = this.first;
    }
  }

  redirectToMessagesPage(messageId: string) {
    this.router.navigate(['/authenticated/messages', messageId]);
  }

  filterProducts() {
    if (this.search_term.trim() === '') {
      this.filtered_products = this.products;
    } else {
      this.filtered_products = this.products.filter((product) =>
        this.matchReference(product)
      );
    }
  }

  matchReference(product: Product): boolean {
    if (this.search_term === '') {
      return true;
    }
    return product.order.toLowerCase().includes(this.search_term.toLowerCase());
  }
}
