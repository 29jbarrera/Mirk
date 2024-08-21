import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from './components/menu-item/menu-item.type';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RippleModule,
    StyleClassModule,
    ButtonModule,
    MenuModule,
    MenuItemComponent,
  ],
  templateUrl: './authenticated.page.html',
  styleUrl: './authenticated.page.scss',
})
export class AuthenticatedPage implements OnInit {
  public menu_items: MenuItem[] = [];
  public deployed_menu: boolean = true;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.menu_items = [
      {
        label: 'Panel de control',
        icon: 'assets/icons/panel-control.png',
        routerLink: '/authenticated/home',
        action: 'home',
        submenu: [],
      },
      {
        label: 'Pedidos',
        icon: 'assets/icons/pedidos.png',
        routerLink: '/authenticated/orders',
        action: 'orders',
        submenu: [],
      },
      {
        label: 'Atención al cliente',
        icon: 'assets/icons/atencion-cliente.png',
        routerLink: '/authenticated/incidents',
        action: 'incidents',
        submenu: [
          {
            label: 'Incidencias',
            icon: '',
            action: 'incidents',
            routerLink: '/authenticated/incidents',
          },
          {
            label: 'Calificaciones',
            icon: '',
            action: 'ratings',
            routerLink: '/authenticated/ratings',
          },
        ],
      },
      {
        label: 'Mensajes',
        icon: 'assets/icons/mensajes.png',
        routerLink: '/authenticated/messages',
        action: 'messages',
        submenu: [],
      },
      // {
      //   label: 'Catálogo',
      //   icon: 'assets/icons/catalogo.png',
      //   routerLink: '/authenticated/ofertas',
      //   action: 'ofertas',
      //   submenu: [],
      // },
      {
        label: 'Precios y Existencias',
        icon: 'assets/icons/precios-existencias.png',
        routerLink: '/authenticated/ofertas',
        action: 'ofertas',
        submenu: [],
      },
      {
        label: 'Contabilidad',
        icon: 'assets/icons/contabilidad.png',
        routerLink: '/authenticated/historico',
        action: 'historico',
        submenu: [
          {
            label: 'Facturación y documentos',
            icon: '',
            action: 'facturacion',
            routerLink: '/authenticated/facturacion',
          },
          {
            label: 'Historial de transacciones',
            icon: '',
            action: 'historico',
            routerLink: '/authenticated/historico',
          },
        ],
      },
      {
        label: 'Configuración',
        icon: 'assets/icons/configuracion.png',
        routerLink: '/authenticated/admin',
        action: 'admin',
        submenu: [],
      },
      {
        label: 'Ayuda',
        icon: 'assets/icons/ayuda.png',
        routerLink: '/authenticated/help',
        action: 'help',
        submenu: [],
      },
    ];

    const width: number = window.innerWidth;

    if (width < 1129) {
      this.handleMenu();
    }
  }

  go_to(path: string) {
    this._router.navigate(['authenticated', ...path.split('/')]);
  }

  handleMenu() {
    const menu = document.getElementById('app-sidebar');

    if (!menu) {
      return;
    }

    this.deployed_menu = !this.deployed_menu;
    menu.classList.toggle('hidden', !this.deployed_menu);
  }
}
