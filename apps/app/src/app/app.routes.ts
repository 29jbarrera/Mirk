import { Route } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { AuthenticatedPage } from './pages/authenticated/authenticated.page';
import { HomePage } from './pages/authenticated/home/home.page';
import { OrdersPage } from './pages/authenticated/orders/orders.page';
import { IncidentsPage } from './pages/authenticated/incidents/incidents.page';
import { MessagesPage } from './pages/authenticated/messages/messages.page';
import { MessagePage } from './pages/authenticated/messages/message/message.page';
import { OffersPage } from './pages/authenticated/offers/offers.page';
import { AccountingPage } from './pages/authenticated/accounting/accounting.page';
import { TransactionsPage } from './pages/authenticated/transactions/transactions.page';

export const appRoutes: Route[] = [
  {
    path: 'login',
    // loadChildren: () => import('./pages/login/login.page').then(m => m.LoginPage)
    component: LoginPage,
  },
  {
    path: 'authenticated',
    component: AuthenticatedPage,
    // loadChildren: () => import('./pages/authenticated/authenticated.page').then(m => m.AuthenticatedPage),
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'orders',
        component: OrdersPage,
      },
      {
        path: 'incidents',
        component: IncidentsPage,
      },
      {
        path: 'messages',
        pathMatch: 'full',
        component: MessagesPage,
      },
      {
        path: 'messages/:message_id',
        component: MessagePage,
      },
      {
        path: 'ofertas',
        component: OffersPage,
      },
      {
        path: 'facturacion',
        component: AccountingPage,
      },
      {
        path: 'historico',
        component: TransactionsPage,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'authenticated/home',
  },
];
