import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'km-transactions-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions-card.page.html',
  styleUrl: './transactions-card.page.scss',
})
export class TransactionsCardPage {
  @Input() amount: number = 0;
  @Input() description: string = '';
}
