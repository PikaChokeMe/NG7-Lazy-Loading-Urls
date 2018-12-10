import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const angularRoutes: Routes = <Routes>[
  {
    path: 'lazy',
    loadChildren: './modules/lazy/lazy.module#LazyModule'
  },
];

const appRoutes: Routes = <Routes>[
  ...angularRoutes
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
