import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'km-transactions-filter',
  standalone: true,
  imports: [CommonModule, DropdownModule],
  templateUrl: './transactions-filter.page.html',
  styleUrl: './transactions-filter.page.scss',
})
export class TransactionsFilterPage {}
