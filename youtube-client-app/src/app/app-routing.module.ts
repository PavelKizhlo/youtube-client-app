import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginPageGuard } from './core/guards/login-page.guard';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoginPageGuard],
  },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
