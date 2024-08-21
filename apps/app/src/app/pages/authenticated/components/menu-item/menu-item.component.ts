import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from './menu-item.type';
import { Router, RouterLink } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { SubmenuItemComponent } from './submenu-item/submenu-item.component';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'km-menu-item',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    StyleClassModule,
    SubmenuItemComponent,
    RippleModule,
    RouterLink,
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
  @Output() go_to: EventEmitter<string> = new EventEmitter<string>();

  public is_deployed: boolean = false;

  constructor(private _router: Router) {}

  deploy_menu() {
    this.is_deployed = !this.is_deployed;
  }

  checkRoute(item: MenuItem) {
    return item.routerLink === this._router.url;
  }
}
