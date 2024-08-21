import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Accounting } from './type-accounting';

type SectionSelected = 'facturacion' | 'docContables';

type Dates = {
  date: string;
};

@Component({
  selector: 'km-accounting',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputIconModule,
    InputTextModule,
    IconFieldModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './accounting.page.html',
  styleUrl: './accounting.page.scss',
})
export class AccountingPage implements OnInit {
  section_selected: SectionSelected = 'facturacion';
  dates: Dates[] = [];
  selectedDate: Dates | undefined;

  accounting: Accounting[] = [
    {
      creation_date: '2024-05-16',
      billing_cycle: '2024-05',
      invoiced_amount: 1500.75,
      amount_payable: 1500.75,
    },
    {
      creation_date: '2024-04-15',
      billing_cycle: '2024-04',
      invoiced_amount: 1200.5,
      amount_payable: 1200.5,
    },
    {
      creation_date: '2024-03-14',
      billing_cycle: '2024-03',
      invoiced_amount: 1350.0,
      amount_payable: 1350.0,
    },
    {
      creation_date: '2024-02-13',
      billing_cycle: '2024-02',
      invoiced_amount: 1100.25,
      amount_payable: 1100.25,
    },
  ];

  ngOnInit(): void {
    this.dates = [
      { date: '16 may 2024, 0:08' },
      { date: '17 may 2024, 0:08' },
      { date: '18 may 2024, 0:08' },
      { date: '19 may 2024, 0:08' },
      { date: '20 may 2024, 0:08' },
    ];
  }

  select_section(section: SectionSelected) {
    this.section_selected = section;
  }
}
