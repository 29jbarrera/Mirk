import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

interface Paginator {
  number: number;
}

type products = {
  create: string;
  id: string;
  shippingMethod: string;
  state: string;
  details: string;
  amount: number;
  import: number;
};

@Component({
  selector: 'km-orders-table',
  standalone: true,
  imports: [
    CommonModule,
    SplitButtonModule,
    ButtonGroupModule,
    FormsModule,
    DropdownModule,
    TableModule,
    TagModule,
  ],
  templateUrl: './ordersTable.component.html',
  styleUrl: './ordersTable.component.scss',
})
export class OrdersTableComponent {
  items: MenuItem[] | undefined;
  paginator: Paginator[] | undefined;
  selectedNumber: Paginator | undefined;

  products: products[] = [
    {
      create: new Date('2024-05-01').toLocaleDateString('es-ES'),
      id: 'ORD123456',
      shippingMethod: 'Envío/ 7-10 días laborales',
      state: 'Esperando envío',
      details: 'Detalle del producto X',
      amount: 10,
      import: 100,
    },
    {
      create: new Date('2024-05-02').toLocaleDateString('es-ES'),
      id: 'ORD234567',
      shippingMethod: 'Producto Y',
      state: 'Esperando envío',
      details: 'Detalle del producto Y ',
      amount: 20,
      import: 200,
    },
    {
      create: new Date('2024-05-03').toLocaleDateString('es-ES'),
      id: 'ORD345678',
      shippingMethod: 'Producto Z',
      state: 'Esperando',
      details: 'Detalle del producto Z  ',
      amount: 30,
      import: 300,
    },
    {
      create: new Date('2024-05-01').toLocaleDateString('es-ES'),
      id: 'ORD123456',
      shippingMethod: 'Envío/ 7-10 días laborales',
      state: 'Esperando envío',
      details: 'Detalle del producto X',
      amount: 10,
      import: 100,
    },
    {
      create: new Date('2024-05-02').toLocaleDateString('es-ES'),
      id: 'ORD234567',
      shippingMethod: 'Producto Y',
      state: 'Esperando envío',
      details: 'Detalle del producto Y ',
      amount: 20,
      import: 200,
    },
    {
      create: new Date('2024-05-03').toLocaleDateString('es-ES'),
      id: 'ORD345678',
      shippingMethod: 'Producto Z',
      state: 'Esperando',
      details: 'Detalle del producto Z  ',
      amount: 30,
      import: 300,
    },
    {
      create: new Date('2024-05-01').toLocaleDateString('es-ES'),
      id: 'ORD123456',
      shippingMethod: 'Envío/ 7-10 días laborales',
      state: 'Esperando envío',
      details: 'Detalle del producto X',
      amount: 10,
      import: 100,
    },
    {
      create: new Date('2024-05-02').toLocaleDateString('es-ES'),
      id: 'ORD234567',
      shippingMethod: 'Producto Y',
      state: 'Esperando envío',
      details: 'Detalle del producto Y ',
      amount: 20,
      import: 200,
    },
    {
      create: new Date('2024-05-03').toLocaleDateString('es-ES'),
      id: 'ORD345678',
      shippingMethod: 'Producto Z',
      state: 'Esperando',
      details: 'Detalle del producto Z  ',
      amount: 30,
      import: 300,
    },
    {
      create: new Date('2024-05-01').toLocaleDateString('es-ES'),
      id: 'ORD123456',
      shippingMethod: 'Envío/ 7-10 días laborales',
      state: 'Esperando envío',
      details: 'Detalle del producto X',
      amount: 10,
      import: 100,
    },
    {
      create: new Date('2024-05-02').toLocaleDateString('es-ES'),
      id: 'ORD234567',
      shippingMethod: 'Producto Y',
      state: 'Esperando envío',
      details: 'Detalle del producto Y ',
      amount: 20,
      import: 200,
    },
    {
      create: new Date('2024-05-03').toLocaleDateString('es-ES'),
      id: 'ORD345678',
      shippingMethod: 'Producto Z',
      state: 'Esperando',
      details: 'Detalle del producto Z  ',
      amount: 30,
      import: 300,
    },
    {
      create: new Date('2024-05-01').toLocaleDateString('es-ES'),
      id: 'ORD123456',
      shippingMethod: 'Envío/ 7-10 días laborales',
      state: 'Esperando envío',
      details: 'Detalle del producto X',
      amount: 10,
      import: 100,
    },
    {
      create: new Date('2024-05-02').toLocaleDateString('es-ES'),
      id: 'ORD234567',
      shippingMethod: 'Producto Y',
      state: 'Esperando envío',
      details: 'Detalle del producto Y ',
      amount: 20,
      import: 200,
    },
    {
      create: new Date('2024-05-03').toLocaleDateString('es-ES'),
      id: 'ORD345678',
      shippingMethod: 'Producto Z',
      state: 'Esperando',
      details: 'Detalle del producto Z  ',
      amount: 30,
      import: 300,
    },
  ];

  selectedProducts!: products;

  rows: number = 5;
  first: number = 0;

  onPageChange(event: any) {
    this.rows = event.rows;
    this.first = event.first;
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
}
