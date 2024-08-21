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
import { Transaction } from './type-transaction';
import { TransactionsCardPage } from './transactions-card/transactions-card.page';
import { InputTextModule } from 'primeng/inputtext';
import { TransactionsFilterPage } from './transactions-filter/transactions-filter.page';

type Id_orders = {
  id: string;
};

@Component({
  selector: 'km-transactions',
  standalone: true,
  imports: [
    CommonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    PaginatorModule,
    DropdownModule,
    ButtonGroupModule,
    TableModule,
    FormsModule,
    TagModule,
    TransactionsCardPage,
    TransactionsFilterPage,
  ],
  templateUrl: './transactions.page.html',
  styleUrl: './transactions.page.scss',
})
export class TransactionsPage {
  id_orders: Id_orders[] | undefined;
  selected_id_orders: Id_orders | undefined;

  filtered_transaction!: Transaction[] | [];
  search_term: string = '';

  ngOnInit() {
    this.filtered_transaction = this.transaction.slice();
  }

  transaction: Transaction[] = [
    {
      create: '2024-05-20',
      received_on: '2024-05-21',
      billing_cycle_date: '2024-06-01',
      order_id: 'ORD123456',
      order_ref: 'REF789',
      invoice_number: 1001,
      quantity: 2,
      description: 'Producto A',
      type: 'Impuesto sobre la comisión',
      import: 150.25,
      status: 'Pagadero',
    },
    {
      create: '2024-05-18',
      received_on: '2024-05-20',
      billing_cycle_date: '2024-05-31',
      order_id: 'ORD789012',
      order_ref: 'REF345',
      invoice_number: 1002,
      quantity: 1,
      description: 'Producto B',
      type: 'Impuesto sobre la comisión',
      import: 99.99,
      status: 'Pendiente',
    },
    {
      create: '2024-05-16',
      received_on: '2024-05-18',
      billing_cycle_date: '2024-05-30',
      order_id: 'ORD456789',
      order_ref: 'REF123',
      invoice_number: 1003,
      quantity: 3,
      description: 'Producto C',
      type: 'Impuesto sobre la comisión',
      import: 200.75,
      status: 'Rechazado',
    },
  ];

  rowsPerPageOptions = [
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
  ];

  first: number = 0;
  rows: number = 10;

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
    if (this.first + this.rows < this.transaction.length) {
      this.first += this.rows;
      dt.first = this.first;
    }
  }

  filterTransactions() {
    if (this.search_term.trim() === '') {
      this.filtered_transaction = this.transaction;
    } else {
      this.filtered_transaction = this.transaction.filter((transaction) =>
        this.matchReference(transaction)
      );
    }
  }

  matchReference(transaction: Transaction): boolean {
    if (this.search_term === '') {
      return true;
    }
    const searchLower = this.search_term.toLowerCase();
    return (
      transaction.order_id.toLowerCase().includes(searchLower) ||
      transaction.order_ref.toLowerCase().includes(searchLower)
    );
  }
}
