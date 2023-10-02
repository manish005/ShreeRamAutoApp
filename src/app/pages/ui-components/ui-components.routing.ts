import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form',
        component: AppBadgeComponent,
      },
      {
        path: 'formdata',
        component: AppChipsComponent,
      },
      {
        path: 'exportdata',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
    ],
  },
];
