import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'km-orders-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
  ],
  templateUrl: './ordersFilter.component.html',
  styleUrl: './ordersFilter.component.scss',
})
export class OrdersFilterComponent implements OnInit {
  
  id: string = "";
  lastName: string = "";
  date1: any;
  date2: any;
  import1: number | undefined;
  import2: number | undefined;
  state: string = "";
  ordersIncidences: string = "";
  ordersRefunds: string = "";
  shippingMethod: string = "";

  ngOnInit(): void {
    
  }

  cleanfilters(){
    this.id = '';
    this.lastName = '';
    this.date1 = '';
    this.date2 = '';
    this.import1 = undefined;
    this.import2 = undefined;
    this.state = '';
    this.ordersIncidences = '';
    this.shippingMethod = '';
  }
}
