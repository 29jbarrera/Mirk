import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HomeGraphicPage } from './graphic/home-graphic.page';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TagModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    HomeGraphicPage,
    RouterModule
    
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  uniqueId = 4500;
  value!: number;
  ratings= 90;
}
