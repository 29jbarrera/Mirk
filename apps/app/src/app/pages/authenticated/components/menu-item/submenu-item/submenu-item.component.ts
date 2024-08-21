import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuItem } from '../menu-item.type';
import { Router, RouterLink } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'km-submenu-item',
  standalone: true,
  imports: [CommonModule, RouterLink, StyleClassModule, RippleModule],
  templateUrl: './submenu-item.component.html',
  styleUrl: './submenu-item.component.scss',
})
export class SubmenuItemComponent {
  @Input() subitem!: SubMenuItem;
  @Output() go_to: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _router: Router) {}

  checkRoute(subitem: any) {
    return subitem.routerLink === this._router.url;
  }
}
