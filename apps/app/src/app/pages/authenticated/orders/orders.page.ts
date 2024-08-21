import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { OrdersTableComponent } from './orders-Table/ordersTable.component';
import { OrdersFilterComponent } from './orders-filter/ordersFilter.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    OrdersTableComponent,
    OrdersFilterComponent,
  ],
  templateUrl: './orders.page.html',
  styleUrl: './orders.page.scss',
})
export class OrdersPage {}
