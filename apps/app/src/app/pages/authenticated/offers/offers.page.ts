import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { Offers } from './type-offers';
import { MenuItem } from 'primeng/api';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PaginatorModule } from 'primeng/paginator';

type SectionSelected = 'ofertas' | 'ofertas-pendientes' | 'ofertas-favoritas';

type Status = {
  status: string;
};

@Component({
  selector: 'km-offers',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    SplitButtonModule,
    ButtonGroupModule,
    FormsModule,
    DropdownModule,
    TableModule,
    InputGroupModule,
    InputGroupAddonModule,
    PaginatorModule,
  ],
  templateUrl: './offers.page.html',
  styleUrl: './offers.page.scss',
})
export class OffersPage {
  items: MenuItem[] | undefined;

  status: Status[] = [{ status: 'Nuevo' }, { status: 'Seminuevo' }];

  section_selected: SectionSelected = 'ofertas';

  select_section(section: SectionSelected) {
    this.section_selected = section;
  }

  offers: Offers[] = [
    {
      product: [
        {
          img: 'https://via.placeholder.com/150',
          title: 'Smartphone',
          description: 'Latest model with advanced features',
        },
      ],
      suk: 'ABC123',
      condition: 'Nuevo',
      price: 499.99,
      quantity: 50,
    },
    {
      product: [
        {
          img: 'https://via.placeholder.com/150',
          title: 'Laptop',
          description: 'High-performance laptop for professionals',
        },
      ],
      suk: 'DEF456626262',
      condition: 'Nuevo',
      price: 799.99,
      quantity: 30,
    },
    {
      product: [
        {
          img: 'https://via.placeholder.com/150',
          title: 'Smartwatch',
          description: 'Smartwatch with health monitoring features',
        },
      ],
      suk: 'GHI78903293939',
      condition: 'refurbished',
      price: 199.99,
      quantity: 70,
    },
    {
      product: [
        {
          img: 'https://via.placeholder.com/150',
          title: 'Tablet',
          description: 'Portable tablet with high-resolution display',
        },
      ],
      suk: 'JKL012747474',
      condition: 'Seminuevo',
      price: 299.99,
      quantity: 100,
    },
  ];

  selectedProducts!: Offers;
}
