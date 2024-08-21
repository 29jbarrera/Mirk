import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

type Days = {
  days: string;
};

@Component({
  selector: 'km-home-graphic',
  standalone: true,
  imports: [CommonModule, DropdownModule, FormsModule, ButtonModule],
  templateUrl: './home-graphic.page.html',
  styleUrl: './home-graphic.page.scss',
})
export class HomeGraphicPage implements OnInit {
  days: Days[] = [];

  selectedDays: Days | undefined;

  ngOnInit() {
    this.days = [{ days: 'Últimos 7 días' }, { days: 'Últmios 30 días' }];
  }
}
